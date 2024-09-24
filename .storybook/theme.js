import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'easyCredit Web Components',
  brandUrl: 'https://easycredit-ratenkauf.de',
  brandImage: `data:image/svg+xml,%3Csvg id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 283.46 104.42'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230066b3;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M34.21,76.25a8.85,8.85,0,0,1,8.84-6.84c4.38,0,5.85,3.12,5.85,6.84Zm19.4,11a27.15,27.15,0,0,1-10.83,2.39c-7.3,0-9.16-2.92-9.3-6.64H58a38.83,38.83,0,0,0,.86-6.51C58.86,66,52,61.44,42.92,61.44c-15.42,0-20.73,12.35-20.73,20.39,0,8.71,6.24,15.81,17.8,15.81a44.35,44.35,0,0,0,12.1-1.92Z' transform='translate(-22.19 -48.53)'/%3E%3Cpath class='cls-1' d='M127,87.68a24.34,24.34,0,0,0,9.7,2c1.92,0,6.71-.2,6.71-3,0-4.92-14.29-2.4-14.29-13.82,0-8.11,9.44-11.36,17.47-11.36a39.61,39.61,0,0,1,11.5,2.06l-2.53,7.84A23.73,23.73,0,0,0,146,69.41c-2.66,0-5.58.6-5.58,3,0,3.85,14.94,3.59,14.94,12.29s-7.24,12.82-16.21,13a54.7,54.7,0,0,1-14.54-1.79Z' transform='translate(-22.19 -48.53)'/%3E%3Cpath class='cls-1' d='M163.29,117.54,162,124.65h.14c1.92-4.06,5.78-7.91,10.7-7.91a13.41,13.41,0,0,1,5,.87l-2.73,10.56c-1.53-1.2-3.25-1.46-5.52-1.46-5,0-8,4.38-8.9,9.5l-3.39,15.94H145.36l7.28-34.61Z' transform='translate(-22.19 -48.53)'/%3E%3Cpath class='cls-1' d='M188.31,131.56a8.82,8.82,0,0,1,8.83-6.85c4.39,0,5.85,3.13,5.85,6.85Zm19.4,11A27,27,0,0,1,196.88,145c-7.31,0-9.17-2.92-9.3-6.64h24.51a38.7,38.7,0,0,0,.86-6.51c0-10.49-6.84-15.08-15.94-15.08-15.41,0-20.73,12.36-20.73,20.4,0,8.7,6.25,15.81,17.81,15.81A44.38,44.38,0,0,0,206.18,151Z' transform='translate(-22.19 -48.53)'/%3E%3Cpath class='cls-1' d='M233.67,143.78c-3.79,0-5.72-2.86-5.72-7.11,0-5.38,3.39-10.76,9-10.76,4,0,5.71,3.59,5.71,7C242.7,137.53,239.31,143.78,233.67,143.78Zm6.57,8.37h11c.14-1.4.34-3.12.73-5.18l9.3-44.64H249.48l-4.19,20.79h-.13c-1.79-3.72-6-6.38-12-6.38-11.82,0-17.53,10.56-17.53,21.92,0,7.78,5.44,14.29,12.88,14.29,6.65,0,9.5-2.46,12.56-6.31h.13Z' transform='translate(-22.19 -48.53)'/%3E%3Cpath class='cls-1' d='M263.39,117.54h12.09l-7.17,34.61H256.22Zm3.06-14.42h12.09l-1.86,8.77H264.59Z' transform='translate(-22.19 -48.53)'/%3E%3Cpath class='cls-1' d='M278.68,117.54h6.85l1.66-7.44,12.62-3.39-2.39,10.83h8.23l-1.46,8.37h-8.7l-2.06,9.63a32.73,32.73,0,0,0-1,6,3.64,3.64,0,0,0,3.92,3.85,12,12,0,0,0,3.86-1l-1.33,7.9a48.27,48.27,0,0,1-7.44.67c-6.11,0-11-3-11-10.23a32.5,32.5,0,0,1,1.06-7.11l2.06-9.7h-6.38Z' transform='translate(-22.19 -48.53)'/%3E%3Cpath class='cls-1' d='M187.2,62.24,175.45,84.09h-.14l-3.12-21.85H160l7.64,34.47-1.28,2.11c-1.77,3.27-3.59,5.72-7,5.72a14.81,14.81,0,0,1-3.92-.55l-1.87,8.88a29.15,29.15,0,0,0,7.19.83c7.64,0,11.56-4,15.08-10.16l1.28-2.11,22.72-39.19Z' transform='translate(-22.19 -48.53)'/%3E%3Cpath class='cls-1' d='M143.68,141.52a26.42,26.42,0,0,1-11.06,2.26c-7.44,0-12.68-3.85-12.68-12.09,0-8.77,6-21.14,18.42-21.14a36.07,36.07,0,0,1,11.46,1.58l1.87-8.91c-2.78-.91-7.55-1.84-15.26-1.84-17.4,0-29.25,14.56-29.25,30,0,12.75,8.57,21.59,23.52,21.59a47.81,47.81,0,0,0,10.86-1.36Z' transform='translate(-22.19 -48.53)'/%3E%3Cpath class='cls-1' d='M100.37,77.24c0-4.19-2.58-7.13-6.6-7.13-5.88,0-10,6.06-10,11.41,0,4.19,2.5,7.31,6.69,7.31C96.18,88.83,100.37,82.86,100.37,77.24Z' transform='translate(-22.19 -48.53)'/%3E%3Cpath class='cls-1' d='M123.42,87a31.26,31.26,0,1,1-2.6-21.52,17.63,17.63,0,0,1,1.63,7.54c0,11.06-10.4,15.78-14.86,15.78a1.17,1.17,0,0,1-1.33-1.33,13.84,13.84,0,0,1,.62-3l4.9-21.67h-7.49l-1.07,4.28a12,12,0,0,0-10.34-5.7c-10.16,0-18.36,9.71-18.36,21.48,0,8.65,6.42,14.71,13.82,14.71,3.65,0,6.77-2.14,9-4.64h.18a4.53,4.53,0,0,0,4.81,4.64C106.31,97.57,116.94,94.59,123.42,87Z' transform='translate(-22.19 -48.53)'/%3E%3C/svg%3E`
});
