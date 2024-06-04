<script setup>
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import emailicon from '@/assets/sendemail.svg'
import twitterSvg from '@/assets/twitter.svg'
import instagramSvg from '@/assets/instagram.svg'
import linkedinSvg from '@/assets/linkedin.svg'
import SingleCard from './rightcomponents/SingleCardComponents.vue'

const emailSupport = import.meta.env.VITE_EMAIL_SUPPORT
const mailTo = 'mailto:' + emailSupport
const dateNow = new Date().getFullYear()
</script>

<template>
  <section class="flex flex-col gap-4 items-end">
    <Card>
      <CardHeader>
        <CardTitle>Hey, I'm software engineer that build this web apps for fun</CardTitle>
      </CardHeader>
      <CardContent>
        I like to follow newest technology trends and playing games, while now I kinda like to
        expand my skill in web development
      </CardContent>
    </Card>

    <Card class="w-fit">
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
        <!-- <Card
          class="flex flex-row justify-between px-4 py-2 rounded-t-md rounded-b-none group cursor-pointer hover:scale-105 ease-in-out duration-75"
        >
          <p class="text-slate-400 group-hover:text-black">Twitter</p>
          <img :src="twitterSvg" class="group-hover:hidden block" />
          <p class="group-hover:block hidden">Mini-blog</p>
        </Card> -->
        <SingleCard title="Twitter" :imageSvg="twitterSvg" subTitle="Mini-blog" />
        <SingleCard title="Instagram" :imageSvg="instagramSvg" subTitle="Gallery archive" />
        <SingleCard title="LinkedIn" :imageSvg="linkedinSvg" subTitle="Professional" />
        <Card
          class="flex flex-row justify-center px-4 py-2 rounded-t-none rounded-b-md text-slate-400 cursor-default hover:scale-105 ease-in-out duration-75"
        >
          <p>© {{ dateNow }}</p>
        </Card>
      </CardHeader>
    </Card>
  </section>
</template>
