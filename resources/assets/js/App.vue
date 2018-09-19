<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    import {router} from './router';
    window._router=router;
    export default {
        router
    }
</script>
