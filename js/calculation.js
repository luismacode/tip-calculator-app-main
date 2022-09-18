export function calculateTip(billNumber, tipValue, peopleNumber) {
  const billPerPerson = getBillPerPerson(billNumber, peopleNumber);
  const tipPerPerson = billPerPerson * getTip(tipValue);
  return setCurrency(tipPerPerson);
}

export function calculateTotal(billNumber, tipValue, peopleNumber) {
  const billPerPerson = getBillPerPerson(billNumber, peopleNumber);
  const tipPerPerson = billPerPerson * getTip(tipValue);
  const totalPerPerson = billPerPerson + tipPerPerson;
  return setCurrency(totalPerPerson);
}

const setCurrency = (currency) => {
  return currency.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

const getTip = (tip) => {
  return Number(tip.slice(0, -1)) / 100;
};

const getBillPerPerson = (bill, people) => {
  return Number(bill) / Number(people);
};
