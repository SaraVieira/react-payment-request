```jsx
<Button
    total="50"
    displayItems={[
      {
        label: "Promo code",
        amount: {
          currency: 'USD',
          value: 32,
        }
      },
      {
        label: "Taxes",
        amount: {
          currency: 'USD',
          value: 18
        }
      }
    ]}
    onSuccess={(data) => console.log(data) }

>Push Me</Button>
```
