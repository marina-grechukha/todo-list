<template>
  <div class="w-72 mx-auto mt-20">
    <form class="mb-4">
      <div class="mb-4">
        <input
          class="w-full border border-gray-300 rounded-md px-4 py-2"
          type="text"
          name="email"
          placeholder="Enter Email"
        />
      </div>

      <div class="mb-4">
        <input
          class="w-full border border-gray-300 rounded-md px-4 py-2"
          type="password"
          name="password"
          placeholder="Enter Password"
        />
      </div>

      <div class="mb-4">
        <input
          class="w-full border border-gray-300 rounded-md px-4 py-2"
          type="password"
          name="password_confirm"
          placeholder="Enter Password Confirmation"
        />
      </div>

      <button class="w-full rounded-md px-4 py-2 bg-green-500 text-white" type="submit">Sign Up</button>
    </form>
    <router-link to="/sign-in">Sign In</router-link>
  </div>
</template>
