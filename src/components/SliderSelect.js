import React from "react";
import { SliderComponent } from "./common/SliderComponent";

export const SliderSelect = ({data, setData}) => {
  // console.log(data)

  const bankLimit = 10000;
  return (
    <>
      <SliderComponent
        label="Home Value"
        min={1000}
        max={bankLimit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={100}
        onChange={(e, value) => setData({
          ...data,
          homeValue: value 
        })}
        unit='$'
        amount={data.homeValue}
        
      />
      <SliderComponent
        label="Down Payment"
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={100}
        onChange={(e, value) =>  setData({
          ...data,
          downPayment: value 
        })}
        unit='$'
        amount={data.downPayment}
        
      />
      <SliderComponent
        label="Loan amount"
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        onChange={(e, value) => setData({
          ...data,
          loanAmount: value 
        })}
        unit='$'
        amount={data.loanAmount}
      />
      <SliderComponent
        label="Interest Rate"
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={0.5}
        onChange={(e, value) => setData({
          ...data,
          interestRate: value 
        })}
        unit='%'
        amount={data.interestRate}
      />
    </>
  );
};
