import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      zoomAndPan="magnify"
      viewBox="0 0 224.87999 44.999999"
      height="60"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
    >
      <defs>
        <g />
        <clipPath id="id1">
          <path
            d="M 13 0.0117188 L 53 0.0117188 L 53 44.988281 L 13 44.988281 Z M 13 0.0117188 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="id2">
          <path
            d="M 26.699219 6.554688 L 39.441406 6.554688 L 39.441406 22.296875 L 26.699219 22.296875 Z M 26.699219 6.554688 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="id3">
          <path
            d="M 22.777344 25.242188 L 33.273438 25.242188 L 33.273438 34.238281 L 22.777344 34.238281 Z M 22.777344 25.242188 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="id4">
          <path
            d="M 32.597656 25.183594 L 43.089844 25.183594 L 43.089844 34.179688 L 32.597656 34.179688 Z M 32.597656 25.183594 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#id1)">
        <path
          fill="#ffffff"
          d="M 52.527344 33.742188 L 52.527344 11.253906 L 33.035156 0.0117188 L 13.546875 11.253906 L 13.546875 33.742188 L 33.035156 44.984375 L 52.527344 33.742188 M 14.601562 33.128906 L 14.601562 11.867188 L 33.035156 1.234375 L 51.46875 11.867188 L 51.46875 33.128906 L 33.035156 43.757812 L 14.601562 33.128906 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <g clipPath="url(#id2)">
        <path
          fill="#ffffff"
          d="M 33.148438 6.554688 C 31.363281 6.554688 29.847656 7 28.765625 7.816406 C 27.683594 8.632812 27.050781 9.832031 27.050781 11.230469 C 27.050781 12.367188 27.417969 13.332031 28.167969 14.058594 C 28.914062 14.789062 30.011719 15.277344 31.449219 15.578125 L 33.441406 16.007812 C 34.402344 16.214844 35.042969 16.46875 35.40625 16.746094 C 35.773438 17.027344 35.902344 17.304688 35.902344 17.738281 C 35.902344 18.226562 35.660156 18.660156 35.199219 18.996094 C 34.738281 19.332031 34.050781 19.558594 33.210938 19.558594 C 31.445312 19.558594 30.308594 18.777344 30.097656 17.777344 C 30.0625 17.597656 29.945312 17.503906 29.753906 17.503906 L 27.050781 17.503906 C 26.949219 17.503906 26.859375 17.542969 26.792969 17.613281 C 26.722656 17.6875 26.691406 17.777344 26.699219 17.875 C 26.816406 19.226562 27.511719 20.359375 28.625 21.121094 C 29.738281 21.886719 31.253906 22.292969 33.039062 22.292969 C 34.960938 22.292969 36.550781 21.855469 37.679688 21.027344 C 38.804688 20.199219 39.441406 18.964844 39.441406 17.503906 C 39.441406 16.34375 39.074219 15.363281 38.289062 14.617188 C 37.5 13.871094 36.324219 13.367188 34.726562 13.03125 L 32.957031 12.65625 C 32.027344 12.457031 31.410156 12.21875 31.058594 11.957031 C 30.707031 11.699219 30.589844 11.449219 30.589844 11.050781 C 30.589844 10.542969 30.804688 10.15625 31.230469 9.859375 C 31.652344 9.566406 32.304688 9.375 33.136719 9.375 C 33.902344 9.375 34.507812 9.554688 34.9375 9.84375 C 35.371094 10.136719 35.640625 10.542969 35.742188 11.066406 C 35.777344 11.253906 35.894531 11.34375 36.089844 11.34375 L 38.734375 11.34375 C 38.835938 11.34375 38.921875 11.308594 38.992188 11.238281 C 39.0625 11.164062 39.09375 11.078125 39.085938 10.980469 C 38.988281 9.675781 38.332031 8.550781 37.285156 7.773438 C 36.238281 6.996094 34.808594 6.554688 33.148438 6.554688 Z M 33.148438 7.238281 C 34.679688 7.238281 35.953125 7.644531 36.855469 8.316406 C 37.652344 8.910156 38.148438 9.714844 38.3125 10.660156 L 36.324219 10.660156 C 36.148438 10.105469 35.835938 9.617188 35.34375 9.285156 C 34.769531 8.894531 34.015625 8.691406 33.136719 8.691406 C 32.195312 8.691406 31.398438 8.898438 30.816406 9.304688 C 30.234375 9.714844 29.882812 10.339844 29.882812 11.050781 C 29.882812 11.617188 30.132812 12.132812 30.628906 12.5 C 31.121094 12.867188 31.824219 13.113281 32.804688 13.324219 L 34.574219 13.699219 C 34.574219 13.699219 34.574219 13.699219 34.574219 13.703125 C 36.101562 14.019531 37.144531 14.492188 37.792969 15.105469 C 38.441406 15.71875 38.734375 16.476562 38.734375 17.503906 C 38.734375 18.78125 38.214844 19.773438 37.25 20.484375 C 36.285156 21.195312 34.851562 21.609375 33.039062 21.609375 C 31.367188 21.609375 29.996094 21.222656 29.035156 20.566406 C 28.179688 19.980469 27.660156 19.175781 27.476562 18.1875 L 29.53125 18.1875 C 29.964844 19.421875 31.367188 20.242188 33.210938 20.242188 C 34.179688 20.242188 35.019531 19.988281 35.625 19.542969 C 36.234375 19.101562 36.609375 18.453125 36.609375 17.738281 C 36.609375 17.140625 36.355469 16.597656 35.847656 16.210938 C 35.339844 15.820312 34.609375 15.558594 33.597656 15.339844 C 33.597656 15.339844 33.597656 15.339844 33.597656 15.335938 L 31.601562 14.910156 C 30.246094 14.625 29.28125 14.175781 28.667969 13.578125 C 28.054688 12.980469 27.757812 12.230469 27.757812 11.230469 C 27.757812 10.023438 28.273438 9.054688 29.203125 8.355469 C 30.128906 7.65625 31.484375 7.238281 33.148438 7.238281 Z M 33.148438 7.238281 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <g clipPath="url(#id3)">
        <path
          fill="#ffffff"
          d="M 22.988281 25.253906 C 22.921875 25.253906 22.867188 25.277344 22.824219 25.328125 C 22.78125 25.382812 22.769531 25.4375 22.785156 25.503906 L 24.878906 34.070312 C 24.90625 34.175781 24.972656 34.230469 25.082031 34.230469 L 26.339844 34.230469 C 26.445312 34.230469 26.515625 34.179688 26.542969 34.078125 L 28.015625 28.695312 L 29.488281 34.078125 C 29.515625 34.179688 29.582031 34.230469 29.691406 34.230469 L 30.949219 34.230469 C 31.058594 34.230469 31.125 34.175781 31.152344 34.070312 L 33.246094 25.503906 C 33.261719 25.4375 33.25 25.382812 33.207031 25.328125 C 33.164062 25.277344 33.109375 25.253906 33.042969 25.253906 L 31.535156 25.253906 C 31.425781 25.253906 31.355469 25.304688 31.332031 25.410156 L 30.160156 30.199219 L 28.847656 25.402344 C 28.820312 25.300781 28.75 25.253906 28.644531 25.253906 L 27.386719 25.253906 C 27.28125 25.253906 27.210938 25.300781 27.183594 25.402344 L 25.871094 30.199219 L 24.699219 25.410156 C 24.671875 25.304688 24.605469 25.253906 24.496094 25.253906 Z M 23.253906 25.660156 L 24.328125 25.660156 L 25.636719 31.011719 C 25.664062 31.117188 25.730469 31.167969 25.84375 31.167969 L 25.875 31.167969 C 25.984375 31.167969 26.050781 31.117188 26.078125 31.015625 L 27.546875 25.660156 L 28.484375 25.660156 L 29.953125 31.015625 C 29.980469 31.117188 30.046875 31.167969 30.152344 31.167969 L 30.1875 31.167969 C 30.300781 31.167969 30.367188 31.117188 30.390625 31.011719 L 31.699219 25.660156 L 32.777344 25.660156 L 30.78125 33.820312 L 29.851562 33.820312 L 28.21875 27.851562 C 28.191406 27.75 28.121094 27.699219 28.015625 27.699219 C 27.90625 27.699219 27.839844 27.75 27.8125 27.851562 L 26.179688 33.820312 L 25.25 33.820312 Z M 23.253906 25.660156 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <g clipPath="url(#id4)">
        <path
          fill="#ffffff"
          d="M 42.882812 34.171875 C 42.949219 34.171875 43.003906 34.144531 43.046875 34.09375 C 43.089844 34.039062 43.101562 33.984375 43.085938 33.917969 L 40.992188 25.351562 C 40.964844 25.246094 40.898438 25.195312 40.785156 25.195312 L 39.53125 25.195312 C 39.421875 25.195312 39.355469 25.242188 39.328125 25.34375 L 37.855469 30.726562 L 36.382812 25.34375 C 36.355469 25.242188 36.285156 25.195312 36.179688 25.195312 L 34.921875 25.195312 C 34.8125 25.195312 34.742188 25.246094 34.71875 25.351562 L 32.625 33.917969 C 32.609375 33.984375 32.621094 34.039062 32.664062 34.09375 C 32.703125 34.144531 32.757812 34.171875 32.828125 34.171875 L 34.335938 34.171875 C 34.445312 34.171875 34.511719 34.117188 34.539062 34.011719 L 35.710938 29.222656 L 37.023438 34.019531 C 37.050781 34.121094 37.117188 34.171875 37.226562 34.171875 L 38.484375 34.171875 C 38.589844 34.171875 38.65625 34.121094 38.683594 34.019531 L 40 29.222656 L 41.171875 34.011719 C 41.195312 34.117188 41.265625 34.171875 41.375 34.171875 Z M 42.617188 33.761719 L 41.539062 33.761719 L 40.230469 28.410156 C 40.207031 28.304688 40.136719 28.253906 40.027344 28.253906 L 39.992188 28.253906 C 39.886719 28.253906 39.820312 28.304688 39.789062 28.40625 L 38.320312 33.761719 L 37.386719 33.761719 L 35.917969 28.40625 C 35.890625 28.304688 35.824219 28.253906 35.714844 28.253906 L 35.679688 28.253906 C 35.570312 28.253906 35.503906 28.304688 35.476562 28.410156 L 34.167969 33.761719 L 33.09375 33.761719 L 35.085938 25.601562 L 36.019531 25.601562 L 37.652344 31.570312 C 37.679688 31.671875 37.746094 31.722656 37.855469 31.722656 C 37.960938 31.722656 38.03125 31.671875 38.058594 31.570312 L 39.691406 25.601562 L 40.621094 25.601562 Z M 42.617188 33.761719 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(81.152041, 20.790793)">
          <g>
            <path d="M 6.5625 -15.140625 C 7.363281 -15.140625 8.148438 -15.019531 8.921875 -14.78125 C 9.691406 -14.550781 10.257812 -14.320312 10.625 -14.09375 L 11.171875 -13.734375 L 9.796875 -11.03125 C 9.691406 -11.101562 9.539062 -11.191406 9.34375 -11.296875 C 9.15625 -11.410156 8.796875 -11.5625 8.265625 -11.75 C 7.734375 -11.945312 7.242188 -12.046875 6.796875 -12.046875 C 6.222656 -12.046875 5.785156 -11.925781 5.484375 -11.6875 C 5.179688 -11.445312 5.03125 -11.125 5.03125 -10.71875 C 5.03125 -10.507812 5.097656 -10.316406 5.234375 -10.140625 C 5.378906 -9.972656 5.625 -9.789062 5.96875 -9.59375 C 6.320312 -9.394531 6.628906 -9.234375 6.890625 -9.109375 C 7.160156 -8.992188 7.570312 -8.816406 8.125 -8.578125 C 9.082031 -8.171875 9.898438 -7.613281 10.578125 -6.90625 C 11.265625 -6.207031 11.609375 -5.410156 11.609375 -4.515625 C 11.609375 -3.671875 11.453125 -2.925781 11.140625 -2.28125 C 10.835938 -1.644531 10.414062 -1.144531 9.875 -0.78125 C 9.34375 -0.425781 8.753906 -0.164062 8.109375 0 C 7.460938 0.175781 6.757812 0.265625 6 0.265625 C 5.351562 0.265625 4.71875 0.195312 4.09375 0.0625 C 3.46875 -0.0625 2.941406 -0.222656 2.515625 -0.421875 C 2.097656 -0.617188 1.71875 -0.8125 1.375 -1 C 1.039062 -1.195312 0.800781 -1.363281 0.65625 -1.5 L 0.421875 -1.6875 L 2.109375 -4.546875 C 2.253906 -4.421875 2.453125 -4.265625 2.703125 -4.078125 C 2.953125 -3.890625 3.398438 -3.640625 4.046875 -3.328125 C 4.691406 -3.015625 5.257812 -2.859375 5.75 -2.859375 C 7.175781 -2.859375 7.890625 -3.347656 7.890625 -4.328125 C 7.890625 -4.523438 7.835938 -4.710938 7.734375 -4.890625 C 7.628906 -5.066406 7.445312 -5.238281 7.1875 -5.40625 C 6.9375 -5.582031 6.710938 -5.722656 6.515625 -5.828125 C 6.316406 -5.929688 5.988281 -6.085938 5.53125 -6.296875 C 5.082031 -6.503906 4.753906 -6.664062 4.546875 -6.78125 C 3.640625 -7.21875 2.941406 -7.769531 2.453125 -8.4375 C 1.960938 -9.101562 1.71875 -9.820312 1.71875 -10.59375 C 1.71875 -11.925781 2.207031 -13.015625 3.1875 -13.859375 C 4.175781 -14.710938 5.300781 -15.140625 6.5625 -15.140625 Z M 6.5625 -15.140625 " />
          </g>
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(93.257008, 20.790793)">
          <g>
            <path d="M 0.140625 -11.890625 L 0.140625 -14.859375 L 10.59375 -14.859375 L 10.59375 -11.890625 L 7.0625 -11.890625 L 7.0625 0 L 3.671875 0 L 3.671875 -11.890625 Z M 0.140625 -11.890625 " />
          </g>
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(103.992967, 20.790793)">
          <g>
            <path d="M 1.078125 -14.859375 L 6.390625 -14.859375 C 7.828125 -14.859375 8.992188 -14.476562 9.890625 -13.71875 C 10.785156 -12.957031 11.234375 -11.867188 11.234375 -10.453125 C 11.234375 -9.359375 10.960938 -8.441406 10.421875 -7.703125 C 9.878906 -6.960938 9.140625 -6.441406 8.203125 -6.140625 L 13.3125 0 L 9 0 L 4.46875 -5.875 L 4.46875 0 L 1.078125 0 Z M 4.46875 -8.265625 L 4.859375 -8.265625 C 5.171875 -8.265625 5.4375 -8.269531 5.65625 -8.28125 C 5.875 -8.300781 6.117188 -8.34375 6.390625 -8.40625 C 6.671875 -8.476562 6.894531 -8.582031 7.0625 -8.71875 C 7.226562 -8.851562 7.367188 -9.046875 7.484375 -9.296875 C 7.609375 -9.546875 7.671875 -9.847656 7.671875 -10.203125 C 7.671875 -10.566406 7.609375 -10.875 7.484375 -11.125 C 7.367188 -11.382812 7.226562 -11.578125 7.0625 -11.703125 C 6.894531 -11.835938 6.671875 -11.941406 6.390625 -12.015625 C 6.117188 -12.085938 5.875 -12.128906 5.65625 -12.140625 C 5.4375 -12.148438 5.171875 -12.15625 4.859375 -12.15625 L 4.46875 -12.15625 Z M 4.46875 -8.265625 " />
          </g>
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(116.890514, 20.790793)">
          <g>
            <path d="M 0.421875 -7.4375 C 0.421875 -9.59375 1.148438 -11.414062 2.609375 -12.90625 C 4.078125 -14.394531 5.84375 -15.140625 7.90625 -15.140625 C 9.988281 -15.140625 11.753906 -14.394531 13.203125 -12.90625 C 14.660156 -11.425781 15.390625 -9.601562 15.390625 -7.4375 C 15.390625 -5.257812 14.671875 -3.429688 13.234375 -1.953125 C 11.804688 -0.472656 10.03125 0.265625 7.90625 0.265625 C 5.726562 0.265625 3.9375 -0.46875 2.53125 -1.9375 C 1.125 -3.40625 0.421875 -5.238281 0.421875 -7.4375 Z M 4.078125 -7.4375 C 4.078125 -6.65625 4.195312 -5.941406 4.4375 -5.296875 C 4.675781 -4.660156 5.09375 -4.117188 5.6875 -3.671875 C 6.289062 -3.234375 7.03125 -3.015625 7.90625 -3.015625 C 9.164062 -3.015625 10.117188 -3.445312 10.765625 -4.3125 C 11.410156 -5.175781 11.734375 -6.21875 11.734375 -7.4375 C 11.734375 -8.65625 11.40625 -9.695312 10.75 -10.5625 C 10.09375 -11.4375 9.144531 -11.875 7.90625 -11.875 C 6.6875 -11.875 5.742188 -11.4375 5.078125 -10.5625 C 4.410156 -9.695312 4.078125 -8.65625 4.078125 -7.4375 Z M 4.078125 -7.4375 " />
          </g>
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(132.688213, 20.790793)">
          <g>
            <path d="M 4.46875 -9.21875 L 4.46875 0 L 1.078125 0 L 1.078125 -14.859375 L 4.46875 -14.859375 L 10.375 -5.640625 L 10.40625 -5.640625 L 10.40625 -14.859375 L 13.796875 -14.859375 L 13.796875 0 L 10.40625 0 L 4.5 -9.21875 Z M 4.46875 -9.21875 " />
          </g>
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(147.567229, 20.790793)">
          <g>
            <path d="M 14.515625 -8.328125 L 14.515625 -5.09375 C 14.128906 -3.332031 13.285156 -2 11.984375 -1.09375 C 10.691406 -0.1875 9.25 0.265625 7.65625 0.265625 C 5.644531 0.265625 3.9375 -0.484375 2.53125 -1.984375 C 1.125 -3.484375 0.421875 -5.296875 0.421875 -7.421875 C 0.421875 -9.585938 1.109375 -11.414062 2.484375 -12.90625 C 3.867188 -14.394531 5.59375 -15.140625 7.65625 -15.140625 C 10.070312 -15.140625 11.984375 -14.289062 13.390625 -12.59375 L 11.171875 -10.15625 C 10.378906 -11.4375 9.273438 -12.078125 7.859375 -12.078125 C 6.804688 -12.078125 5.910156 -11.617188 5.171875 -10.703125 C 4.441406 -9.796875 4.078125 -8.703125 4.078125 -7.421875 C 4.078125 -6.160156 4.441406 -5.082031 5.171875 -4.1875 C 5.910156 -3.289062 6.804688 -2.84375 7.859375 -2.84375 C 8.722656 -2.84375 9.472656 -3.101562 10.109375 -3.625 C 10.753906 -4.144531 11.078125 -4.84375 11.078125 -5.71875 L 7.65625 -5.71875 L 7.65625 -8.328125 Z M 14.515625 -8.328125 " />
          </g>
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(162.494048, 20.790793)">
          <g />
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(124.267849, 41.73068)">
          <g />
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(62.52131, 35.308841)">
          <g>
            <path d="M 11.734375 -7.890625 L 9.796875 0 L 7.109375 0 L 6.015625 -4.828125 L 4.90625 0 L 2.21875 0 L 0.296875 -7.890625 L 2.671875 -7.890625 L 3.59375 -2.5 L 4.828125 -7.890625 L 7.234375 -7.890625 L 8.453125 -2.546875 L 9.359375 -7.890625 Z M 11.734375 -7.890625 " />
          </g>
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(74.555865, 35.308841)">
          <g>
            <path d="M 6.625 -3.203125 C 6.625 -3.035156 6.613281 -2.867188 6.59375 -2.703125 L 2.4375 -2.703125 C 2.457031 -2.359375 2.550781 -2.097656 2.71875 -1.921875 C 2.882812 -1.753906 3.101562 -1.671875 3.375 -1.671875 C 3.738281 -1.671875 4 -1.835938 4.15625 -2.171875 L 6.484375 -2.171875 C 6.390625 -1.734375 6.203125 -1.34375 5.921875 -1 C 5.640625 -0.664062 5.285156 -0.398438 4.859375 -0.203125 C 4.441406 -0.015625 3.972656 0.078125 3.453125 0.078125 C 2.835938 0.078125 2.285156 -0.0507812 1.796875 -0.3125 C 1.316406 -0.570312 0.941406 -0.941406 0.671875 -1.421875 C 0.398438 -1.910156 0.265625 -2.484375 0.265625 -3.140625 C 0.265625 -3.796875 0.398438 -4.363281 0.671875 -4.84375 C 0.941406 -5.332031 1.316406 -5.707031 1.796875 -5.96875 C 2.273438 -6.226562 2.828125 -6.359375 3.453125 -6.359375 C 4.078125 -6.359375 4.625 -6.226562 5.09375 -5.96875 C 5.570312 -5.71875 5.945312 -5.351562 6.21875 -4.875 C 6.488281 -4.40625 6.625 -3.847656 6.625 -3.203125 Z M 4.390625 -3.765625 C 4.390625 -4.023438 4.296875 -4.234375 4.109375 -4.390625 C 3.929688 -4.546875 3.710938 -4.625 3.453125 -4.625 C 3.179688 -4.625 2.957031 -4.550781 2.78125 -4.40625 C 2.613281 -4.257812 2.503906 -4.046875 2.453125 -3.765625 Z M 4.390625 -3.765625 " />
          </g>
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(81.44554, 35.308841)">
          <g>
            <path d="M 0.265625 -3.140625 C 0.265625 -3.785156 0.378906 -4.351562 0.609375 -4.84375 C 0.847656 -5.332031 1.171875 -5.707031 1.578125 -5.96875 C 1.984375 -6.226562 2.4375 -6.359375 2.9375 -6.359375 C 3.375 -6.359375 3.75 -6.269531 4.0625 -6.09375 C 4.375 -5.925781 4.613281 -5.695312 4.78125 -5.40625 L 4.78125 -6.28125 L 6.984375 -6.28125 L 6.984375 0 L 4.78125 0 L 4.78125 -0.875 C 4.613281 -0.582031 4.367188 -0.347656 4.046875 -0.171875 C 3.734375 -0.00390625 3.363281 0.078125 2.9375 0.078125 C 2.4375 0.078125 1.984375 -0.0507812 1.578125 -0.3125 C 1.171875 -0.570312 0.847656 -0.945312 0.609375 -1.4375 C 0.378906 -1.925781 0.265625 -2.492188 0.265625 -3.140625 Z M 4.78125 -3.140625 C 4.78125 -3.546875 4.671875 -3.863281 4.453125 -4.09375 C 4.234375 -4.320312 3.960938 -4.4375 3.640625 -4.4375 C 3.316406 -4.4375 3.046875 -4.320312 2.828125 -4.09375 C 2.609375 -3.875 2.5 -3.554688 2.5 -3.140625 C 2.5 -2.742188 2.609375 -2.425781 2.828125 -2.1875 C 3.046875 -1.945312 3.316406 -1.828125 3.640625 -1.828125 C 3.960938 -1.828125 4.234375 -1.941406 4.453125 -2.171875 C 4.671875 -2.410156 4.78125 -2.734375 4.78125 -3.140625 Z M 4.78125 -3.140625 " />
          </g>
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(89.051026, 35.308841)">
          <g>
            <path d="M 2.8125 -8.28125 L 2.8125 0 L 0.625 0 L 0.625 -8.28125 Z M 2.8125 -8.28125 " />
          </g>
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(92.495863, 35.308841)">
          <g>
            <path d="M 4.328125 -1.875 L 4.328125 0 L 3.375 0 C 1.769531 0 0.96875 -0.796875 0.96875 -2.390625 L 0.96875 -4.453125 L 0.203125 -4.453125 L 0.203125 -6.28125 L 0.96875 -6.28125 L 0.96875 -7.796875 L 3.171875 -7.796875 L 3.171875 -6.28125 L 4.3125 -6.28125 L 4.3125 -4.453125 L 3.171875 -4.453125 L 3.171875 -2.34375 C 3.171875 -2.175781 3.207031 -2.054688 3.28125 -1.984375 C 3.363281 -1.910156 3.5 -1.875 3.6875 -1.875 Z M 4.328125 -1.875 " />
          </g>
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(97.204546, 35.308841)">
          <g>
            <path d="M 4.75 -6.328125 C 5.46875 -6.328125 6.035156 -6.085938 6.453125 -5.609375 C 6.878906 -5.128906 7.09375 -4.476562 7.09375 -3.65625 L 7.09375 0 L 4.90625 0 L 4.90625 -3.375 C 4.90625 -3.726562 4.8125 -4.003906 4.625 -4.203125 C 4.4375 -4.410156 4.1875 -4.515625 3.875 -4.515625 C 3.539062 -4.515625 3.28125 -4.410156 3.09375 -4.203125 C 2.90625 -4.003906 2.8125 -3.726562 2.8125 -3.375 L 2.8125 0 L 0.625 0 L 0.625 -8.28125 L 2.8125 -8.28125 L 2.8125 -5.375 C 3.007812 -5.664062 3.273438 -5.894531 3.609375 -6.0625 C 3.941406 -6.238281 4.320312 -6.328125 4.75 -6.328125 Z M 4.75 -6.328125 " />
          </g>
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(104.87713, 35.308841)">
          <g />
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(107.013381, 35.308841)">
          <g>
            <path d="M 9.828125 -7.890625 L 9.828125 0 L 7.640625 0 L 7.640625 -4.359375 L 6.15625 0 L 4.3125 0 L 2.8125 -4.390625 L 2.8125 0 L 0.625 0 L 0.625 -7.890625 L 3.28125 -7.890625 L 5.265625 -2.765625 L 7.1875 -7.890625 Z M 9.828125 -7.890625 " />
          </g>
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(117.470912, 35.308841)">
          <g>
            <path d="M 0.265625 -3.140625 C 0.265625 -3.785156 0.378906 -4.351562 0.609375 -4.84375 C 0.847656 -5.332031 1.171875 -5.707031 1.578125 -5.96875 C 1.984375 -6.226562 2.4375 -6.359375 2.9375 -6.359375 C 3.375 -6.359375 3.75 -6.269531 4.0625 -6.09375 C 4.375 -5.925781 4.613281 -5.695312 4.78125 -5.40625 L 4.78125 -6.28125 L 6.984375 -6.28125 L 6.984375 0 L 4.78125 0 L 4.78125 -0.875 C 4.613281 -0.582031 4.367188 -0.347656 4.046875 -0.171875 C 3.734375 -0.00390625 3.363281 0.078125 2.9375 0.078125 C 2.4375 0.078125 1.984375 -0.0507812 1.578125 -0.3125 C 1.171875 -0.570312 0.847656 -0.945312 0.609375 -1.4375 C 0.378906 -1.925781 0.265625 -2.492188 0.265625 -3.140625 Z M 4.78125 -3.140625 C 4.78125 -3.546875 4.671875 -3.863281 4.453125 -4.09375 C 4.234375 -4.320312 3.960938 -4.4375 3.640625 -4.4375 C 3.316406 -4.4375 3.046875 -4.320312 2.828125 -4.09375 C 2.609375 -3.875 2.5 -3.554688 2.5 -3.140625 C 2.5 -2.742188 2.609375 -2.425781 2.828125 -2.1875 C 3.046875 -1.945312 3.316406 -1.828125 3.640625 -1.828125 C 3.960938 -1.828125 4.234375 -1.941406 4.453125 -2.171875 C 4.671875 -2.410156 4.78125 -2.734375 4.78125 -3.140625 Z M 4.78125 -3.140625 " />
          </g>
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(125.076398, 35.308841)">
          <g>
            <path d="M 4.734375 -6.328125 C 5.453125 -6.328125 6.023438 -6.085938 6.453125 -5.609375 C 6.878906 -5.128906 7.09375 -4.476562 7.09375 -3.65625 L 7.09375 0 L 4.90625 0 L 4.90625 -3.375 C 4.90625 -3.726562 4.8125 -4.003906 4.625 -4.203125 C 4.4375 -4.410156 4.1875 -4.515625 3.875 -4.515625 C 3.539062 -4.515625 3.28125 -4.410156 3.09375 -4.203125 C 2.90625 -4.003906 2.8125 -3.726562 2.8125 -3.375 L 2.8125 0 L 0.625 0 L 0.625 -6.28125 L 2.8125 -6.28125 L 2.8125 -5.375 C 3.007812 -5.664062 3.269531 -5.894531 3.59375 -6.0625 C 3.925781 -6.238281 4.304688 -6.328125 4.734375 -6.328125 Z M 4.734375 -6.328125 " />
          </g>
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(132.748981, 35.308841)">
          <g>
            <path d="M 0.265625 -3.140625 C 0.265625 -3.785156 0.378906 -4.351562 0.609375 -4.84375 C 0.847656 -5.332031 1.171875 -5.707031 1.578125 -5.96875 C 1.984375 -6.226562 2.4375 -6.359375 2.9375 -6.359375 C 3.375 -6.359375 3.75 -6.269531 4.0625 -6.09375 C 4.375 -5.925781 4.613281 -5.695312 4.78125 -5.40625 L 4.78125 -6.28125 L 6.984375 -6.28125 L 6.984375 0 L 4.78125 0 L 4.78125 -0.875 C 4.613281 -0.582031 4.367188 -0.347656 4.046875 -0.171875 C 3.734375 -0.00390625 3.363281 0.078125 2.9375 0.078125 C 2.4375 0.078125 1.984375 -0.0507812 1.578125 -0.3125 C 1.171875 -0.570312 0.847656 -0.945312 0.609375 -1.4375 C 0.378906 -1.925781 0.265625 -2.492188 0.265625 -3.140625 Z M 4.78125 -3.140625 C 4.78125 -3.546875 4.671875 -3.863281 4.453125 -4.09375 C 4.234375 -4.320312 3.960938 -4.4375 3.640625 -4.4375 C 3.316406 -4.4375 3.046875 -4.320312 2.828125 -4.09375 C 2.609375 -3.875 2.5 -3.554688 2.5 -3.140625 C 2.5 -2.742188 2.609375 -2.425781 2.828125 -2.1875 C 3.046875 -1.945312 3.316406 -1.828125 3.640625 -1.828125 C 3.960938 -1.828125 4.234375 -1.941406 4.453125 -2.171875 C 4.671875 -2.410156 4.78125 -2.734375 4.78125 -3.140625 Z M 4.78125 -3.140625 " />
          </g>
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(140.354467, 35.308841)">
          <g>
            <path d="M 2.9375 -6.359375 C 3.363281 -6.359375 3.734375 -6.269531 4.046875 -6.09375 C 4.367188 -5.925781 4.613281 -5.695312 4.78125 -5.40625 L 4.78125 -6.28125 L 6.984375 -6.28125 L 6.984375 -0.0625 C 6.984375 0.519531 6.867188 1.046875 6.640625 1.515625 C 6.421875 1.992188 6.070312 2.375 5.59375 2.65625 C 5.125 2.945312 4.523438 3.09375 3.796875 3.09375 C 2.828125 3.09375 2.050781 2.863281 1.46875 2.40625 C 0.894531 1.945312 0.566406 1.328125 0.484375 0.546875 L 2.640625 0.546875 C 2.679688 0.742188 2.789062 0.898438 2.96875 1.015625 C 3.15625 1.128906 3.390625 1.1875 3.671875 1.1875 C 4.410156 1.1875 4.78125 0.769531 4.78125 -0.0625 L 4.78125 -0.875 C 4.613281 -0.582031 4.367188 -0.347656 4.046875 -0.171875 C 3.734375 -0.00390625 3.363281 0.078125 2.9375 0.078125 C 2.4375 0.078125 1.984375 -0.0507812 1.578125 -0.3125 C 1.171875 -0.570312 0.847656 -0.945312 0.609375 -1.4375 C 0.378906 -1.925781 0.265625 -2.492188 0.265625 -3.140625 C 0.265625 -3.785156 0.378906 -4.351562 0.609375 -4.84375 C 0.847656 -5.332031 1.171875 -5.707031 1.578125 -5.96875 C 1.984375 -6.226562 2.4375 -6.359375 2.9375 -6.359375 Z M 4.78125 -3.140625 C 4.78125 -3.546875 4.671875 -3.863281 4.453125 -4.09375 C 4.234375 -4.320312 3.960938 -4.4375 3.640625 -4.4375 C 3.316406 -4.4375 3.046875 -4.320312 2.828125 -4.09375 C 2.609375 -3.875 2.5 -3.554688 2.5 -3.140625 C 2.5 -2.742188 2.609375 -2.425781 2.828125 -2.1875 C 3.046875 -1.945312 3.316406 -1.828125 3.640625 -1.828125 C 3.960938 -1.828125 4.234375 -1.941406 4.453125 -2.171875 C 4.671875 -2.410156 4.78125 -2.734375 4.78125 -3.140625 Z M 4.78125 -3.140625 " />
          </g>
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(147.959952, 35.308841)">
          <g>
            <path d="M 6.625 -3.203125 C 6.625 -3.035156 6.613281 -2.867188 6.59375 -2.703125 L 2.4375 -2.703125 C 2.457031 -2.359375 2.550781 -2.097656 2.71875 -1.921875 C 2.882812 -1.753906 3.101562 -1.671875 3.375 -1.671875 C 3.738281 -1.671875 4 -1.835938 4.15625 -2.171875 L 6.484375 -2.171875 C 6.390625 -1.734375 6.203125 -1.34375 5.921875 -1 C 5.640625 -0.664062 5.285156 -0.398438 4.859375 -0.203125 C 4.441406 -0.015625 3.972656 0.078125 3.453125 0.078125 C 2.835938 0.078125 2.285156 -0.0507812 1.796875 -0.3125 C 1.316406 -0.570312 0.941406 -0.941406 0.671875 -1.421875 C 0.398438 -1.910156 0.265625 -2.484375 0.265625 -3.140625 C 0.265625 -3.796875 0.398438 -4.363281 0.671875 -4.84375 C 0.941406 -5.332031 1.316406 -5.707031 1.796875 -5.96875 C 2.273438 -6.226562 2.828125 -6.359375 3.453125 -6.359375 C 4.078125 -6.359375 4.625 -6.226562 5.09375 -5.96875 C 5.570312 -5.71875 5.945312 -5.351562 6.21875 -4.875 C 6.488281 -4.40625 6.625 -3.847656 6.625 -3.203125 Z M 4.390625 -3.765625 C 4.390625 -4.023438 4.296875 -4.234375 4.109375 -4.390625 C 3.929688 -4.546875 3.710938 -4.625 3.453125 -4.625 C 3.179688 -4.625 2.957031 -4.550781 2.78125 -4.40625 C 2.613281 -4.257812 2.503906 -4.046875 2.453125 -3.765625 Z M 4.390625 -3.765625 " />
          </g>
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(154.849627, 35.308841)">
          <g>
            <path d="M 8.828125 -6.328125 C 9.617188 -6.328125 10.238281 -6.085938 10.6875 -5.609375 C 11.132812 -5.140625 11.359375 -4.488281 11.359375 -3.65625 L 11.359375 0 L 9.171875 0 L 9.171875 -3.375 C 9.171875 -3.707031 9.078125 -3.96875 8.890625 -4.15625 C 8.703125 -4.34375 8.453125 -4.4375 8.140625 -4.4375 C 7.816406 -4.4375 7.5625 -4.34375 7.375 -4.15625 C 7.1875 -3.96875 7.09375 -3.707031 7.09375 -3.375 L 7.09375 0 L 4.90625 0 L 4.90625 -3.375 C 4.90625 -3.707031 4.8125 -3.96875 4.625 -4.15625 C 4.445312 -4.34375 4.195312 -4.4375 3.875 -4.4375 C 3.539062 -4.4375 3.28125 -4.34375 3.09375 -4.15625 C 2.90625 -3.96875 2.8125 -3.707031 2.8125 -3.375 L 2.8125 0 L 0.625 0 L 0.625 -6.28125 L 2.8125 -6.28125 L 2.8125 -5.453125 C 3.007812 -5.710938 3.257812 -5.921875 3.5625 -6.078125 C 3.875 -6.242188 4.234375 -6.328125 4.640625 -6.328125 C 5.109375 -6.328125 5.519531 -6.226562 5.875 -6.03125 C 6.238281 -5.832031 6.523438 -5.550781 6.734375 -5.1875 C 6.960938 -5.519531 7.257812 -5.789062 7.625 -6 C 7.988281 -6.21875 8.390625 -6.328125 8.828125 -6.328125 Z M 8.828125 -6.328125 " />
          </g>
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(166.78352, 35.308841)">
          <g>
            <path d="M 6.625 -3.203125 C 6.625 -3.035156 6.613281 -2.867188 6.59375 -2.703125 L 2.4375 -2.703125 C 2.457031 -2.359375 2.550781 -2.097656 2.71875 -1.921875 C 2.882812 -1.753906 3.101562 -1.671875 3.375 -1.671875 C 3.738281 -1.671875 4 -1.835938 4.15625 -2.171875 L 6.484375 -2.171875 C 6.390625 -1.734375 6.203125 -1.34375 5.921875 -1 C 5.640625 -0.664062 5.285156 -0.398438 4.859375 -0.203125 C 4.441406 -0.015625 3.972656 0.078125 3.453125 0.078125 C 2.835938 0.078125 2.285156 -0.0507812 1.796875 -0.3125 C 1.316406 -0.570312 0.941406 -0.941406 0.671875 -1.421875 C 0.398438 -1.910156 0.265625 -2.484375 0.265625 -3.140625 C 0.265625 -3.796875 0.398438 -4.363281 0.671875 -4.84375 C 0.941406 -5.332031 1.316406 -5.707031 1.796875 -5.96875 C 2.273438 -6.226562 2.828125 -6.359375 3.453125 -6.359375 C 4.078125 -6.359375 4.625 -6.226562 5.09375 -5.96875 C 5.570312 -5.71875 5.945312 -5.351562 6.21875 -4.875 C 6.488281 -4.40625 6.625 -3.847656 6.625 -3.203125 Z M 4.390625 -3.765625 C 4.390625 -4.023438 4.296875 -4.234375 4.109375 -4.390625 C 3.929688 -4.546875 3.710938 -4.625 3.453125 -4.625 C 3.179688 -4.625 2.957031 -4.550781 2.78125 -4.40625 C 2.613281 -4.257812 2.503906 -4.046875 2.453125 -3.765625 Z M 4.390625 -3.765625 " />
          </g>
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(173.673196, 35.308841)">
          <g>
            <path d="M 4.734375 -6.328125 C 5.453125 -6.328125 6.023438 -6.085938 6.453125 -5.609375 C 6.878906 -5.128906 7.09375 -4.476562 7.09375 -3.65625 L 7.09375 0 L 4.90625 0 L 4.90625 -3.375 C 4.90625 -3.726562 4.8125 -4.003906 4.625 -4.203125 C 4.4375 -4.410156 4.1875 -4.515625 3.875 -4.515625 C 3.539062 -4.515625 3.28125 -4.410156 3.09375 -4.203125 C 2.90625 -4.003906 2.8125 -3.726562 2.8125 -3.375 L 2.8125 0 L 0.625 0 L 0.625 -6.28125 L 2.8125 -6.28125 L 2.8125 -5.375 C 3.007812 -5.664062 3.269531 -5.894531 3.59375 -6.0625 C 3.925781 -6.238281 4.304688 -6.328125 4.734375 -6.328125 Z M 4.734375 -6.328125 " />
          </g>
        </g>
      </g>
      <g fill="#ffffff" fillOpacity="1">
        <g transform="translate(181.345779, 35.308841)">
          <g>
            <path d="M 4.328125 -1.875 L 4.328125 0 L 3.375 0 C 1.769531 0 0.96875 -0.796875 0.96875 -2.390625 L 0.96875 -4.453125 L 0.203125 -4.453125 L 0.203125 -6.28125 L 0.96875 -6.28125 L 0.96875 -7.796875 L 3.171875 -7.796875 L 3.171875 -6.28125 L 4.3125 -6.28125 L 4.3125 -4.453125 L 3.171875 -4.453125 L 3.171875 -2.34375 C 3.171875 -2.175781 3.207031 -2.054688 3.28125 -1.984375 C 3.363281 -1.910156 3.5 -1.875 3.6875 -1.875 Z M 4.328125 -1.875 " />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Logo;