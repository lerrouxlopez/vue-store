<template>
  <div>
    <div class="px-3 pt-6">
      <div class="d-flex justify-space-between">
        <div class="d-flex">
          <v-avatar width="15" color="primary"></v-avatar>
          <div class="px-3 pt-1">
            <div class="font-weight-bold">My Business Name</div>
            <div class="caption">5m ago</div>
          </div>
        </div>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </div>
      <div class="pt-3">
        <p>The align-items flex setting can be changed using the flex align classes. This by default will modify the flexbox items on the y-axis but is reversed when using flex-direction: column, modifying the x-axis. Choose from start, end, center, baseline, or stretch (browser default).</p>
      </div>
    </div>
    <v-card-subtitle class="font-weight-bold mb-3">Write a review</v-card-subtitle>
    <v-card-text>
      <v-text-field
        dense
        outlined
        label="Your Name"
      ></v-text-field>
      <v-textarea
        rows="3"
        outlined
        hide-details
        label="Post Something"
      ></v-textarea>
      <div class="d-flex pt-3 justify-space-between">
        <div>
          <v-btn icon small>
            <v-icon small>mdi-thumb-up-outline</v-icon>
          </v-btn>
          <v-btn icon small>
            <v-icon small>mdi-thumb-down-outline</v-icon>
          </v-btn>
        </div>
        <div>
          <v-btn
            color="primary"
            rounded
            class="text-capitalize"
          >Post</v-btn>
        </div>
      </div>
    </v-card-text>
  </div>
</template>
