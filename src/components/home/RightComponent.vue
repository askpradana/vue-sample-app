<script setup>
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import emailicon from '@/assets/sendemail.svg'
import twitterSvg from '@/assets/twitter.svg'
import instagramSvg from '@/assets/instagram.svg'
import linkedinSvg from '@/assets/linkedin.svg'
import SingleCard from './helper/SingleCardComponents.vue'

const emailSupport = import.meta.env.VITE_EMAIL_SUPPORT
const mailTo = 'mailto:' + emailSupport
const dateNow = new Date().getFullYear()
</script>

<template>
  <section class="flex flex-col gap-4 items-end mb-4 sm:mb-0">
    <Card class="group hover:scale-105 ease-in-out duration-200">
      <CardHeader>
        <CardTitle>Hey, I'm software engineer that build this web apps for fun</CardTitle>
      </CardHeader>
      <CardContent>
        I like to follow newest technology trends and playing games, while now I kinda like to
        expand my skill in web development
      </CardContent>
    </Card>

    <Card class="w-fit group hover:scale-105 ease-in-out duration-200">
      <CardHeader>
        <a v-bind="{ href: mailTo }">
          <CardTitle class="bg-slate-100 w-fit py-2 px-4 flex flex-wrap gap-4 justify-end">
            {{ emailSupport }} <img :src="emailicon" />
          </CardTitle>
        </a>
      </CardHeader>
    </Card>

    <Card class="w-full">
      <CardHeader>
        <SingleCard
          title="Twitter"
          :imageSvg="twitterSvg"
          subTitle="Mini-blog"
          href="https://twitter.com/"
        />
        <SingleCard
          title="Instagram"
          :imageSvg="instagramSvg"
          subTitle="Gallery archive"
          href="https://instagram.com"
        />
        <SingleCard
          title="LinkedIn"
          :imageSvg="linkedinSvg"
          subTitle="Professional"
          href="https://linkedin.com"
        />
        <Card
          class="flex flex-row justify-center px-4 py-2 rounded-t-none rounded-b-md text-slate-400 cursor-default hover:scale-105 ease-in-out duration-75"
        >
          <p>© {{ dateNow }}</p>
        </Card>
      </CardHeader>
    </Card>
  </section>
</template>
