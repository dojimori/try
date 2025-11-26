<template>
  <form
    v-motion-fade
    class="bg-white p-4 w-[300px] border border-slate-400 shadow-md"
    @submit.prevent="submitHandler"
  >
    <h4 class="text-lg">register</h4>
    <div class="border w-full border-gray-300"></div>

    <div class="mt-4">
      <input
        type="text"
        placeholder="Username"
        v-model="username"
        name="username"
        class="border border-gray-400 px-4 py-1.5 w-full shadow-inner outline-none"
      />

      <input
        type="text"
        placeholder="Password"
        v-model="username"
        name="password"
        class="border border-gray-400 px-4 py-1.5 w-full shadow-inner outline-none mt-2"
      />

      <button
        class="w-full p-1.5 text-white mt-2 shadow-inner cursor-pointer hover:shadow-md enter-btn"
      >
        <span class="font-bold tracking-wider">register</span>
      </button>

      <button
        class="text-[#29487d] w-full p-1.5 mt-2 shadow-inner border border-gray-200 cursor-pointer hover:scale-105 duration-200 transition-all ease-in flex items-center gap-2"
      >
        <i class="ph ph-arrow-left text-gray-600"></i>
        <router-link to="/" class="flex-1 text-center">
          <span class="font-bold">back</span></router-link
        >
      </button>
    </div>
  </form>

  <div class="w-full text-center">
    <small class="cursor-pointer">
      <a href="https://github.com/dojimori" target="_blank" class="text-center underline">
        github
      </a>
      |
      <a
        href="https://www.facebook.com/jo.jyn626"
        target="_blank"
        class="text-center underline"
      >
        facebook
      </a>
    </small>
  </div>
</template>

<style scoped>
.enter-btn {
  background-color: #29487d;
  background: linear-gradient(rgb(98, 122, 173), rgb(89, 114, 168));
  transition: all 0.3s ease;
}

.enter-btn:hover {
  scale: 1.1;
  transform: rotate(1deg);
}

input {
  animation: default 0.3s forwards;
}

input:focus {
  animation: lift 0.3s forwards;
}

@keyframes lift {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-4px);
  }
}

@keyframes default {
  from {
    transform: translateY(-4px);
  }

  to {
    transform: translateY(0);
  }
}
</style>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      username: "",
    };
  },

  methods: {
    submitHandler() {
      if (!this.username.trim()) return;
      localStorage.setItem("username", this.username.trim());
      this.$router.push("/chat");
    },
  },
};
</script>
