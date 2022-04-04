<template>
</template>

<script>
export default {
   created() {
        this.$auth.$subscribe((mutation, state) => {
            if (!state.isAuthenticated) {
                this.$router.push('/');
            }
        })

        this.$auth.logout();
    },
}
</script>