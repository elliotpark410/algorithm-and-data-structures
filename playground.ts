const data =
{
  accounts: [
    {
      id: "test1",
      assets: [
        {
          total: "2",
        },

      ],
    },
  ]
}

const result = data.accounts.filter(
  (x) =>
    x.assets.filter((y) => Number(y.total) > 0).length > 0 &&
    x.id != "burn"
);

console.log('result')
console.log(result)