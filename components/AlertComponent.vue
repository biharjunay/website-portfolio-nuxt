<template>
    <div class="alert-container">
        <TransitionGroup>
            <div v-for="alert in alertStore.alerts" :key="alert.id" :class="`alert alert-${alert.type}`" @click="removeAlert(alert.id)">
                <span>{{ alert.message }}</span>
            </div>
        </TransitionGroup>
    </div>
</template>

<script setup lang="ts">
import { useAlertStore } from '~/stores/alert';

const alertStore = useAlertStore();
function removeAlert(id: number) {
    alertStore.removeAlert(id);
}
</script>

<style scoped>
.alert-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    cursor: pointer;
}

.alert {
    background-color: #f9f9f9;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.alert-info {
    background-color: #d1ecf1;
    color: #0c5460;
}

.alert-success {
    background-color: #d1ecf1;
    color: #0f8a2d;
}

.alert-warning {
    background-color: #fff3cd;
    color: #856404;
}

.alert-danger {
    background-color: #f8d7da;
    color: #721c24;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;

    div {
        transition: all .3s ease;
    }
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transition: all .5s ease;
}

.v-enter-to,
.v-leave-from {
    div {
        transition: all .3s ease;
    }
}
</style>