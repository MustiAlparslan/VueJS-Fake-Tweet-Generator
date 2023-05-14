<template>
  <div class="w-full h-full  flex">
    <Sidebar />
    <Tweet />
  </div>
</template>

<script>
import Sidebar from "./components/sidebar";
import Tweet from "./components/tweet";

export default {
  name: "App",
  components: {
    Sidebar,
    Tweet,
  },
};
</script>
