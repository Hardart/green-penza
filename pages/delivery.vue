<template>
  <SectionsDeliveryMain />
  <Section color="muted">
    <div class="card card-body bg-emerald-800 text-gray-100 text-center py-8">
      <h4 class="font-black text-3xl tracking-wider animate-pulse mb-4">Внимание!</h4>
      <p class="text-xl font-semibold">Мы не несем никакой ответственности за работу почты и служб доставки.</p>
    </div>
  </Section>
  <Section padding="large">
    <div>
      <SectionsTitle>Варианты доставки</SectionsTitle>
      <AccordeonCustomData class="mx-auto" :items="accordeonData.delivery" />
    </div>
  </Section>
  <Section color="muted" padding="large">
    <SectionsTitle>Упаковка материала</SectionsTitle>
    <p class="text-lg">
      Корневая система саженцев обрабатывается специальной глиняной болтушкой с добавлением измельченного опила, либо оборачивается во влажный мох. Далее корни саженцев обматываются стрейч-пленкой и
      упаковываются в индивидуальную гофра-тару. Это гарантирует сохранность корней растения от подсыхания при транспортировке до 30 дней. Высокие саженцы для избегания поломки закрепляются специальным
      деревянным штативом. Упаковка отличается целостностью и высокой набежностью.
    </p>
  </Section>
  <Section padding="large">
    <SectionsTitle>Гарантия качества</SectionsTitle>
    <p class="text-lg">
      <span class="font-bold">Высокое качество</span> – один из основополагающих пунктов работы нашей компаниии! Но как вы понимаете, мы работаем с живым товаром, и в случае недоразумений мы всегда готовы
      быстро и четко разобраться в проблеме.
    </p>
    <div class="divide-y divide-neutral-400 my-4">
      <div class="text-lg py-5">
        <p class="mb-2 font-medium">Претензии по качеству принимаются через форму обратной связи на нашем сайте в течение 2-х недель с момента получения товара при наличии:</p>
        <ul class="list-disc list-inside list text-base">
          <li>письменного изложения сути претензии</li>
          <li>фотографии бракованного товара</li>
          <li>акта отделения связи</li>
          <li>копии или оригинала накладной на полученный товар</li>
        </ul>
      </div>
      <div class="text-lg py-5">
        <p class="mb-2 font-medium">В случае обнаружения недостачи товара Вы вправе потребовать:</p>
        <ul class="list-disc list-inside list text-base">
          <li>письменного изложения сути претензии</li>
          <li>фотографии бракованного товара</li>
          <li>акта отделения связи</li>
          <li>копии или оригинала накладной на полученный товар</li>
        </ul>
      </div>
      <div class="text-lg py-5">
        <p class="mb-2 font-medium">Для возврата денежных средств необходимо предоставить следующие данные:</p>
        <ul class="list-disc list-inside list text-base">
          <li>Ф.И.О. получателя</li>
          <li>адрес получателя</li>
          <li>номер счёта</li>
          <li>наименование банка</li>
          <li>БИК банка</li>
          <li>корр. счёт</li>
        </ul>
      </div>
    </div>
    <p class="italic font-light">В случае не соблюдения условий оформления претензий, мы оставляем за собой право отказать в их удовлетворении.</p>
  </Section>
</template>

<script setup lang="ts">
import { accordeonData } from '@/localData'
</script>

<style lang="scss"></style>
