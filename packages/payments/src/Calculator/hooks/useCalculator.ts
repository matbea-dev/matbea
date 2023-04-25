import { IOption, IWizardData, apiGetWizardData, apiCalculatorCommission } from '@matbea/api';
import { useEffect, useMemo, useState } from "react"
import { getCurrencyExchangeOptions, getExchangeOptions } from '../lib';
import { useForm } from 'react-hook-form';

type FormData = {
  amountTo: string,
  amountFrom: string,
  currencyFrom: IOption,
  currencyTo: IOption
}

export const useCalculator = ()=>{
    const [wizardData, setWizardData] = useState<IWizardData | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [comissionLoading, setComissionLoading] = useState<boolean>(false)
    const {control, handleSubmit, formState, setError, watch, setValue} = useForm<FormData>()
    const {currencyFrom, currencyTo, amountFrom, amountTo} = watch()
    const [lastTouchedInput, setLastTouchedInput] = useState<'from' | 'to' | null>(null)

    const fetch = async ()=>{
      setLoading(true)
      const data = await apiGetWizardData();
      setWizardData(data)
      setLoading(false)  
    }

    const rawSelectOptions = useMemo(()=>{
      if (wizardData){
        return getExchangeOptions(wizardData)
      }
      return {
        in: [],
        out: []
      }
    }, [wizardData])

    const outSelectOptions = useMemo(()=>{
      if (!currencyFrom){
        return rawSelectOptions.out
      }
      return getCurrencyExchangeOptions(currencyFrom, rawSelectOptions.out)
    }, [currencyFrom, rawSelectOptions])

    useEffect(()=>{
      fetch()
    },[])

    useEffect(()=>{
      if (currencyTo?.value === currencyFrom?.value){
        setValue('currencyFrom', null)
      }
    }, [currencyTo])

    useEffect(()=>{
      if (currencyTo?.value === currencyFrom?.value){
        setValue('currencyTo', null)
      }
    }, [currencyFrom])

    useEffect(()=>{
      let timeoutId;

      if (
        lastTouchedInput==null ||
        !currencyFrom || 
        !currencyTo
      ) return;

      const paymentSystemId =
      currencyFrom.type === "P"
        ? currencyFrom.paymentSystem.id
        : currencyTo.paymentSystem.id;

      if (!paymentSystemId) return;

      const isReverse = lastTouchedInput === 'to';

      timeoutId = setTimeout(()=>{
        (async ()=>{
          setComissionLoading(true)
          const {data} = await apiCalculatorCommission({
            amountFrom: +amountFrom,
            amountTo: +amountTo,
            currencyFrom: currencyFrom.currency.id,
            currencyTo: currencyTo.currency.id,
            paymentSystem: +paymentSystemId,
            isReverse
          })
          const amount = data.data.calculatedAmount.toString()
          if (isReverse){
            setValue('amountFrom', amount)
            return
          }
          setValue('amountTo', amount)
          setComissionLoading(false)
        })()
      }, 800)
      
      return ()=>{
        clearTimeout(timeoutId)
      }
    }, [amountFrom, amountTo, currencyFrom, currencyTo])

    const handleCalculatorSubmit = () => {
      const query: {
        cur_to?: string;
        cur_from?: string;
        amount_from?: string;
      } = {};
      const cur_to = currencyTo?.value;
      const cur_from = currencyFrom?.value;
      const amount_from = +amountFrom;
      if (amount_from && amount_from > 0) {
        query.amount_from = amountFrom;
      }
      if (cur_to) {
        query.cur_to = cur_to;
      }
      if (cur_from) {
        query.cur_from = cur_from;
      }

      const params = new URLSearchParams(query)

      window.open('https://matbea.com/en/swap?'+ params)
    };

    return {
      wizardData,
      loading,
      comissionLoading,
      errors: formState.errors,
      formController: control,
      submit: handleSubmit(handleCalculatorSubmit),
      selectOptions: {
        in: rawSelectOptions.in,
        out: outSelectOptions
      },
      setLastTouchedInput,
    }
}