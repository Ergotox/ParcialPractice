<template>
    <div class="card">
        <pv-toolbar class="shadow-3 pt-2 pb-2">
            <template #start>
                <h2 class="mt-0 mb-0 pt-0 pb-0">Food Truck Lovers</h2>
            </template>
            <template #end>
                <div class="flex-column">
                    <router-link v-for="item in items"
                                 :to="item.to"
                                 custom
                                 v-slot="{navigate, href}"
                                 :key="item.label">
                        <pv-button
                                class="p-button-text"
                                :href="href"
                                @click="navigate">{{ item.label }}</pv-button>
                    </router-link>
                </div>
            </template>
        </pv-toolbar>
    </div>
</template>
<script>
export default{
    name:"navbar-content",
    data() {
        return {
            items: [
                { label: 'Home', to: '/home' },
            ],

        }
    }
}
</script>
<style scoped>

</style>
