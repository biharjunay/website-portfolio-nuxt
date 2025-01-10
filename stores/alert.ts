import { defineStore } from 'pinia';

export const useAlertStore = defineStore('alert', {
  state: () => ({
    alerts: [] as any[],
  }),
  actions: {
    addAlert(message: string, type: "info" | "warning" | "danger" | "success" = 'info') {
      const id = Date.now();
      this.alerts.push({ id, message, type });
      setTimeout(() => {
        this.removeAlert(id);
      }, 5000);
    },
    removeAlert(id: number) {
      this.alerts = this.alerts.filter(alert => alert.id !== id);
    },
  },
});
