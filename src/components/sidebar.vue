<template>
  <div
    class="w-3/12 min-w-[255px] flex flex-col px-4 py-2 bg-black h-full border-r-2 shadow-lg shadow-primary border-primary"
  >
    <header class="border-b pb-1 border-primary">
      <span class="font-medium text-primary text-lg">Tweet Oluştur</span>
    </header>

    <div class="w-full flex-1 overflow-y-auto mt-4">
      <section class="w-full mb-3 text-xs">
        <label class="block">Profil Fotoğrafı</label>
        <input
          type="text"
          v-model="$store.state.imageUrl"
          placeholder="Url"
          class="text-[#e7e9ea] bg-[#262626] rounded-sm w-full border-b border-borderColor outline-none pb-1"
        />
      </section>

      <div class="w-full my-7">
        <section class="w-full mb-3 text-xs">
          <label class="block">Ad</label>
          <input
            type="text"
            v-model="$store.state.name"
            maxlength="60"
            class="text-[#e7e9ea] bg-transparent w-full border-b border-borderColor outline-none pb-1"
          />
        </section>
        <section class="w-full mb-3 text-xs">
          <label class="block1">Kullanıcı Adı</label>
          <input
            type="text"
            v-model="$store.state.username"
            maxlength="60"
            class="text-[#e7e9ea] bg-transparent w-full border-b border-borderColor outline-none pb-1"
          />
        </section>
        <section class="w-full mb-3 text-xs">
          <label class="block">Tweet</label>
          <textarea
            type="text"
            v-model="$store.state.tweet"
            maxlength="250"
            class="min-h-[21px] h-auto max-h-[80px] text-[#e7e9ea] bg-transparent w-full border-b border-borderColor outline-none pb-1"
          />
        </section>
      </div>

      <div class="flex justify-between flex-wrap">
        <section class="w-2/4 mb-3 text-xs pr-1">
          <label class="block text-center pb-1">Retweet </label>
          <input
            type="number"
            class="bg-[#262626] py-1 w-full outline-none text-white pl-1 rounded-sm"
            @input="limitInputLength($store.state.retweet, 9)"
            defaultValue="0"
            v-model.number="$store.state.retweet"
            min="0"

          />
        </section>
        <section class="w-2/4 mb-3 text-xs">
          <label class="block text-center pb-1">Beğeni</label>
          <input
            type="number"
            class="bg-[#262626] py-1 outline-none text-white w-full pl-1 rounded-sm"
            @input="limitInputLength($store.state.like, 9)"
            defaultValue="0"
            min="0"
            v-model.number="$store.state.like"
          />
        </section>
        <section class="w-2/4 mb-3 text-xs pr-1">
          <label class="block text-center pb-1">Yer işareti</label>
          <input
            type="number"
            class="bg-[#262626] py-1 outline-none text-white w-full pl-1 rounded-sm"
            @input="limitInputLength($store.state.bookMark, 9)"
            min="0"
            defaultValue="0"
            v-model.number="$store.state.bookMark"
          />
        </section>
        <section class="w-2/4 mb-3 text-xs pr-1">
          <label class="block text-center pb-1">Görüntülenme</label>
          <input
            type="number"
            class="bg-[#262626] py-1 outline-none text-white w-full pl-1 rounded-sm"
            @input="limitInputLength($store.state.views, 9)"
            min="0"
            defaultValue="0"
            v-model.number="$store.state.views"
          />
        </section>
      </div>
      <section class="w-full mb-3 text-xs">
        <label class="block">Doğrulanmış Hesap </label>
        <input type="checkbox" @change="check($event)" />
      </section>
    </div>
    <footer class="w-full mb-2 mt-auto flex items justify-center">
      <button
        @click="downloadTweet"
        class="font-bold bg-primary w-3/4 h-8 rounded-full"
      >
        Oluştur
      </button>
    </footer>
  </div>
</template>

<script>
import * as htmlToImage from "html-to-image";

export default {
  name: "sidebar",
  data() {
    return {};
  },
  methods: {
    downloadTweet() {
      const tweetElement = document.getElementById("tweet");
      htmlToImage
        .toPng(tweetElement)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.style.display = "hidden"
          link.href = dataUrl;
          link.download = "tweet.png";
          link.click();
        })
        .catch((error) => {
          console.error("ERROR!", error);
        });
    },
    check(event) {
      this.$store.commit("setIsVerified", event.target.checked);
    },
    limitInputLength(value, maxLength) {
      if (value.toString().length > maxLength) {
        this.$store.state.retweet = value.toString().slice(0, maxLength);
      }
    },
  },
};
</script>
