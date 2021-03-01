<template>
    <div class="caption">
        <v-row>
           <v-col cols="3">
              <div class="font-weight-bold pb-3">Information</div>
              <div><a href="#">Privacy Policy</a></div>
              <div><a href="#">Terms and Conditions</a></div>
           </v-col>
           <v-col cols="3">
              <div class="font-weight-bold pb-3">My Account</div>
              <div><a href="#">My Account</a></div>
              <div><a href="#">Order History</a></div>
           </v-col>
        </v-row>
        <v-divider class="divider my-4"></v-divider>
        <v-row>
            <v-col>
                <div>Powered by iBial</div>
                <div>iBial Store <span>&copy; {{ new Date().getFullYear() }}</span></div>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #ffffff;
}
.divider {
    background-color:#666;
}
</style>
