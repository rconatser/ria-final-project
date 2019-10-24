<template>
    
</template>

<script>
import { eBus } from "../main.js";

export default {
    data: () => ({
        serverStatus: "Unknown"
    }),
    created() {
        eBus.$on("DisplayServerStatus", ({ status1 }) => {
            this.serverStatus = status1;
        });
        eBus.$on("DisplayServerStatus", ({ status2 }) => {
            this.serverStatus = status2;
        });
        eBus.$on("DisplayServerStatus", ({ status3 }) => {
            this.serverStatus = status3;
        });
        eBus.$on("DisplayServerStatus", ({ status4 }) => {
            this.serverStatus = status4;
        });
        eBus.$on("DisplayServerStatus", ({ status5 }) => {
            this.serverStatus = status5;
        });
    }
};
</script>