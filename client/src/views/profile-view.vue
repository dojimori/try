<template>
    <main class="flex flex-col gap-0 border border-gray-400 sm:w-3xl lg:w-[1080px]">
        <header-component></header-component>

        <div class="bg-white p-2" v-motion-fade>

            <div class="flex gap-12">
                <div class=" border-2 border-gray-300 p-2">
                    <img src="/def_pfp_3.jpg" class="w-[166px]" alt="">
                </div>

                <div class="mt-4">
                    <h4 style="font-size: 1.2em; ">Username</h4>
                    <!-- <h4 style="font-size: 1.2em; ">2/2/2</h4> -->
                </div>
            </div>



            <div>
                <h1>timeline</h1>
            </div>

        </div>



    </main>
</template>

<script>
import HeaderComponent from '@/components/header-component.vue';

export default {
    components: {
        HeaderComponent
    }
}

</script>