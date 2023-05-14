<template>
  <main class="flex-1 self-center" id="tweet">
    <article
      @click="downloadTweet"
      class="max-w-[600px] m-auto w-full bg-black border border-[#2f3336] min-h-[80px] px-4 py-3 max-h-[445px]"
    >
      <header class="flex justify-between h-[50px]">
        <div class="flex gap-2">
          <div>
            <div
              class="w-12 h-12 rounded-full"
              :style="{
                backgroundImage:
                  'url(' + ($store.state.imageUrl || defaultAvatar) + ')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
              }"
            />
          </div>
          <div
            class="text-[15px] mt-[5px] cursor-pointer w-full h-[40px] flex flex-col justify-center"
          >
            <div
              class="leading-[8px] font-bold hover:underline text-[#e7e9ea] w-full flex items-center gap-1"
            >
              <span>{{ $store.state.name || "Ad" }}</span>
              <span v-if="$store.state.isVerified"><VerifiedIcon /></span>
            </div>
            <div class="leading-[2px] pt-[4px] text-[#71767b]">
              <span
                ><span class="text-sm">@</span
                >{{ $store.state.username || "kullanıcı adı" }}</span
              >
            </div>
          </div>
        </div>
        <div class="cursor-pointer"><MoreIcon /></div>
      </header>
      <div class="text-[#e7e9ea] text-[15px] break-words">
        <span>{{ $store.state.tweet || "tweet içeriği" }}</span>
      </div>
      <div
        class="border-b border-borderColor pb-2 text-[#71767b] flex items-center gap-1"
      >
        <span class="text-[15px]"> {{ formatDate() }}</span>
        <span
          class="w-[2px] h-[2px] inline-block mt-[2px] rounded-full bg-[#71767b] mx-1"
        />
        <span class="text-white text-[14px]"
          ><span>{{ formatNumber($store.state.views) }}</span>
        </span>
        <span class="text-[14px]">Görüntülenme</span>
      </div>
      <div class="border-b border-borderColor py-2 flex gap-4 text-sm">
        <div>
          <span class="font-bold text-[#e7e9ea] pr-1">{{
            formatNumber($store.state.retweet)
          }}</span>
          <span class="text-[#71767b]">Retweet</span>
        </div>
        <div>
          <span class="font-bold text-[#e7e9ea] pr-1">{{
            formatNumber($store.state.quotes)
          }}</span>
          <span class="text-[#71767b]">Alıntılar</span>
        </div>
        <div>
          <span class="font-bold text-[#e7e9ea] pr-1">{{
            formatNumber($store.state.like)
          }}</span>
          <span class="text-[#71767b]">Beğeni</span>
        </div>
        <div>
          <span class="font-bold text-[#e7e9ea] pr-1">{{
            formatNumber($store.state.bookMark)
          }}</span>
          <span class="text-[#71767b]">Yer işareti</span>
        </div>
      </div>
      <footer
        class="flex w-full justify-around mt-3 text-[13px] text-[#71767b]"
      >
        <div class="flex items-center gap-1"><CommentIcon /></div>
        <div class="flex items-center gap-1"><RetweetIcon /></div>
        <div class="flex items-center gap-1 cursor-pointer" @click="like">
          <LikeIcon v-if="!isLike" />
          <LikedIcon v-else />
        </div>
        <div class="flex items-center gap-1"><ViewIcon /></div>
        <div class="flex items-center gap-1"><ShareIcon /></div>
      </footer>
    </article>
  </main>
</template>

<script>
import moment from "moment";
import {
  MoreIcon,
  CommentIcon,
  LikeIcon,
  RetweetIcon,
  ViewIcon,
  ShareIcon,
  LikedIcon,
  VerifiedIcon,
} from "../icons";
export default {
  name: "tweet",
  components: {
    MoreIcon,
    CommentIcon,
    LikeIcon,
    LikedIcon,
    RetweetIcon,
    ViewIcon,
    ShareIcon,
    VerifiedIcon,
  },
  data() {
    return {
      name: "",
      username: "",
      tweet: "",
      isLike: false,
      defaultAvatar:
        "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
    };
  },
  methods: {
    like() {
      this.isLike = !this.isLike;
    },
    formatDate() {
      moment.locale("tr");

      let date = moment();
      let formattedDate = date.format("A HH:mm · DD MMM YYYY");

      let hour = {
        AM: "ÖÖ",
        PM: "ÖS",
      };

      for (let [key, value] of Object.entries(hour)) {
        formattedDate = formattedDate.replace(key, value);
      }

      return formattedDate;
    },
    formatNumber(num) {
      let formattedNumber;
      if (num >= 1e9) {
        formattedNumber = (num / 1e9).toFixed(1) + " Ml";
      } else if (num >= 1e6) {
        formattedNumber = (num / 1e6).toFixed(1) + " Mn";
      } else if (num >= 1e3) {
        formattedNumber = (num / 1e3).toFixed(1) + " B";
      } else {
        formattedNumber = num.toString();
      }

      return formattedNumber;
    },
  },
};
</script>
