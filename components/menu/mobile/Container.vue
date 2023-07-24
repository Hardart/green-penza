<template>
  <TransitionRoot :show="open" as="template">
    <div>
      <Dialog class="relative z-50" @close="closeMenu">
        <TransitionModalBackground />

        <!-- Wrap your panel in a `TransitionChild`. -->
        <TransitionModalMobileMenu>
          <DialogPanel class="relative flex flex-1 w-full max-w-xs mr-16">
            <UiButtonClose />
            <MenuMobileList />
          </DialogPanel>
        </TransitionModalMobileMenu>
      </Dialog>
    </div>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import { Dialog, DialogPanel, TransitionRoot } from '@headlessui/vue'
defineProps<{
  open: boolean
}>()
const { closeMenu } = useMenu()
</script>

<style lang="scss"></style>
