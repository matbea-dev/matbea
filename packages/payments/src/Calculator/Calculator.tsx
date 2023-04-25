import React from 'react'
import {Box, Space, BlockAlignText, H4, Input, CurrencyRate, SelectSearch, Button, TextButton} from '@matbea/core';
import './style.scss';
import {ICalculator} from './types'
import classNames from 'classnames';
import { useCalculator } from './hooks';
import { Controller } from 'react-hook-form';

export const Calculator: React.FC<ICalculator> = ({
  style,
  className
}) => {
  const {
    wizardData,
    loading,
    errors,
    selectOptions,
    comissionLoading,
    formController,
    submit,
    setLastTouchedInput
  } = useCalculator()

  if (loading){

    return <p>loading...</p>
  }

  return (
      <Box
        className={classNames('swap', className)}
        borderRadius={5}
        style={style}
        bgColor="tertiary"
        shadow="tertiary"
        paddingBottom="level2"
        paddingTop="level2"
      >
       <Space flex direction="column" rowGap="level2"> 
          <BlockAlignText align="center">
            <H4>Calculator</H4>
          </BlockAlignText>
          <div className="swap__body">
            <Space
              flex
              justify="center"
              breakpoints={{ md: { justify: "flex-end" } }}
              className="swap__top"
            >
              <CurrencyRate
                valueCrypto="1"
                cryptoName={"BTC"}
                valueFiat="200"
                fiatName={"RUB"}
              />
          </Space>
          <Space flex direction="column" rowGap="level1">
            <Space className="swap__group" flex wrap="wrap" rowGap="level1">
              <Space
                flex
                className="swap__group-item"
                direction="column"
                rowGap="level1"
              >
                <Controller
                  rules={{
                    required: true
                  }}
                  name='currencyFrom'
                  control={formController}
                  render={({field})=>{
                    return <SelectSearch
                    error={!!errors?.currencyFrom}
                    label={'You pay'}
                    options={selectOptions.in}
                    placeholder={'Select currency'}
                    onChange={field.onChange}
                    value={field.value}
                    />
                  }}  
                />

                <Controller 
                  name='amountFrom'
                  rules={{
                    required: 'Field is required'
                  }}
                  control={formController}
                  render={({field})=>{
                      return <Input
                      disabled={comissionLoading}
                      error={errors.amountFrom?.message.toString() || ''}
                      name="amountFrom"
                      placeholder="Enter amount"
                      type="number"
                      autoComplete="off"
                      inputMode="numeric"
                      value={field.value}
                      onChange={(val)=>{
                        field.onChange(val)
                        setLastTouchedInput('from')
                      }}
                    />
                  }}
                />
              </Space>

              <Space
                flex
                className="swap__group-item"
                direction="column"
                rowGap="level1"
              >
                <Controller 
                  name='currencyTo'
                  rules={{
                    required: true
                  }}
                  control={formController}
                  render={({field})=>{
                      return <SelectSearch
                      error={!!errors?.currencyTo}
                      label={'You receive'}
                      options={selectOptions.out}
                      placeholder={'Select currency'}
                      onChange={field.onChange}
                      value={field.value}
                    />
                  }}
                />

                <Controller 
                  name='amountTo'
                  control={formController}
                  render={({field})=>{
                      return <Input
                      name="amountTo"
                      disabled={comissionLoading}
                      placeholder="Enter amount"
                      type="number"
                      autoComplete="off"
                      inputMode="numeric"
                      value={field.value}
                      onChange={(val)=>{
                        field.onChange(val)
                        setLastTouchedInput('to')
                      }}
                    />
                  }}
                />

              </Space>
            </Space>
            </Space>
          </div>
          <Space direction="column" flex rowGap="const-level4">
            <Button disabled={comissionLoading} onClick={submit}>
              <TextButton weight="bold">Convert</TextButton>
            </Button>
        </Space>
       </Space>
      </Box>
  )
}
