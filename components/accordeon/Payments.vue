<template>
  <ul class="max-w-4xl w-full rounded-2xl overflow-hidden space-y-1 shadow" uk-accordion="active: 0">
    <li class="w-full open:bg-slate-300" :class="!i ? 'uk-open' : ''" v-for="(item, i) in accordeonItems">
      <div class="uk-accordion-title flex bg-emerald-500">
        <a class="py-3 px-5 sm:text-lg font-bold flex-1 flex items-center justify-between" href="#">
          {{ item.title }}
          <ChevronRightIcon class="h-5 w-5 transition-transform duration-150" />
        </a>
      </div>
      <div class="py-3 px-5 uk-accordion-content bg-white/50">
        <p class="max-sm:text-sm">{{ item.body }}</p>
      </div>
    </li>
  </ul>
</template>

<script setup>
const accordeonItems = [
  {
    id: 1,
    title: 'Наложенный платеж',
    body: 'Вы оплачиваете посылку при получении в отделении «Почты России» или в специализированных местах выдачи. Также необходимо будет оплатить доставку и почтовый тариф (при заказе на сумму от 10000 рублей, доставка осуществляется бесплатно)',
  },
  {
    id: 2,
    title: 'Оплата  на расчетный счет',
    body: 'Оплата за выбранный товар осуществляется путем перечисления денежных средств на расчетный счет продавца. Моментом оплаты считается дата поступления денежных средств на расчетный счет. Денежные средства могут поступить в течение одного или двух банковских дней',
  },
  { id: 3, title: 'Оплата online', body: '«Robokassa» - возможность online оплаты выбранного Вами товара с помощью электронных денег или различных банковских карт' },
]
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
</script>
