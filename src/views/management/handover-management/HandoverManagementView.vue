<template>
    <div class="container">
      <div class="title">
        <h2>Bàn Giao Xe - Lái Xe</h2>
      </div>
      <div class="table">
        <TableHandover :tableData="listVehicleManagement" />
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import TableHandover from "./components/TableHandoverView.vue";
  export default defineComponent({
    components: { TableHandover },
    data() {
      return {
        listVehicleManagement: [
          {
            truckType: "Max force",
            truckPlate: "abc",
            truckStatus: "abc",
            driverOwn: "abc",
            note: "abc",
          },
        ],
      };
    },
  });
  </script>
  
  <style scoped>
  .container {
    margin-left: 30px;
    margin-top: 20px;
    margin-right: 50px;
    flex: 1;
  }
  </style>
  