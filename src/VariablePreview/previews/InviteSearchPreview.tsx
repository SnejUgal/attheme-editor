import { PreviewProps, stringify } from "./common";
import React from "react";

const InviteSearch = (props: PreviewProps) => {
  const getColor = stringify(props.getColor);

  return (
    <svg viewBox="0 0 480 170">
      <rect width="100%" height="100%" />
      <rect fill={getColor({ variable: `windowBackgroundWhite` })} y={106} width="100%" height={64} />
      <path
        fill={getColor({ variable: `windowBackgroundWhiteGrayIcon` })}
        d="M30.6 145h21.5v4.25H30.6zm21.5 0a10.8 4 0 0 1-10.8 4 10.8 4 0 0 1-10.8-4 10.8 4 0 0 1 10.8-4 10.8 4 0 0 1 10.8 4zm-5-12a5.75 5.75 0 0 1-5.75 5.75A5.75 5.75 0 0 1 35.6 133a5.75 5.75 0 0 1 5.75-5.75A5.75 5.75 0 0 1 47.1 133zm-17.6-1.5v11h-3v-11zm-7 4h11v3h-11z"
      />
      <path
        fill={getColor({ variable: `windowBackgroundWhiteBlackText` })}
        d="M305 140l-1.25 1.3v4.08h-1.99v-16.5h1.99v9.98l1.06-1.28 3.62-3.82h2.42l-4.52 4.86 5.05 6.77h-2.33zm-13.3-6.24l.065 1.46q1.33-1.68 3.48-1.68 3.68 0 3.72 4.16v7.68h-1.99v-7.69q-.011-1.26-.58-1.86-.56-.602-1.75-.602-.967 0-1.7.516-.73.516-1.14 1.35v8.28h-1.99v-11.6zm-4.82 11.6h-1.99v-11.6h1.99zm-2.15-14.7q0-.483.29-.816.301-.333.881-.333t.881.333.301.816-.301.806q-.301.322-.881.322t-.881-.322q-.29-.322-.29-.806zm-9.26 13h7.41v1.69h-9.49v-15.6h2.07zm-12.2 1.69q-.172-.344-.279-1.22-1.39 1.44-3.31 1.44-1.72 0-2.83-.967-1.1-.978-1.1-2.47 0-1.82 1.38-2.81 1.39-1.01 3.89-1.01h1.93v-.913q0-1.04-.623-1.65-.623-.623-1.84-.623-1.06 0-1.78.537t-.72 1.3h-2q0-.87.612-1.68.623-.816 1.68-1.29 1.06-.473 2.33-.473 2.01 0 3.15 1.01 1.14.999 1.18 2.76v5.35q0 1.6.408 2.55v.172zm-3.3-1.51q.935 0 1.77-.483.838-.483 1.21-1.26v-2.38h-1.56q-3.65 0-3.65 2.14 0 .935.623 1.46.623.526 1.6.526zm-6.82 1.51h-1.99v-11.6h1.99zm-2.15-14.7q0-.483.29-.816.301-.333.881-.333t.881.333.301.816-.301.806q-.301.322-.881.322t-.881-.322q-.29-.322-.29-.806zm-6.6 12l2.88-8.93h2.03l-4.17 11.6h-1.51l-4.21-11.6h2.03zm-11.3-2.99q0 2.65-1.21 4.28-1.21 1.62-3.29 1.62-2.12 0-3.33-1.34v5.6h-1.99v-16.1h1.82l.097 1.29q1.21-1.5 3.37-1.5 2.09 0 3.31 1.58 1.22 1.58 1.22 4.39zm-1.99-.226q0-1.97-.838-3.1-.838-1.14-2.3-1.14-1.8 0-2.71 1.6v5.55q.892 1.59 2.73 1.59 1.43 0 2.27-1.13.849-1.14.849-3.37zm-12.5 4.76q-1.16 1.36-3.41 1.36-1.86 0-2.84-1.07-.967-1.08-.978-3.2v-7.56h1.99v7.51q0 2.64 2.15 2.64 2.28 0 3.03-1.7v-8.45h1.99v11.6h-1.89zm-20-4.77q0-1.71.666-3.07.677-1.36 1.87-2.11 1.2-.741 2.74-.741 2.37 0 3.83 1.64 1.47 1.64 1.47 4.37v.14q0 1.7-.655 3.05-.645 1.34-1.86 2.09-1.2.752-2.77.752-2.36 0-3.83-1.64-1.46-1.64-1.46-4.35zm2 .236q0 1.93.892 3.1.902 1.17 2.41 1.17 1.51 0 2.41-1.18.892-1.19.892-3.33 0-1.91-.913-3.09-.902-1.19-2.41-1.19-1.47 0-2.37 1.17-.902 1.17-.902 3.35zm-2.84-4.16q-.451-.075-.978-.075-1.96 0-2.65 1.67v8.25h-1.99v-11.6h1.93l.032 1.34q.978-1.56 2.77-1.56.58 0 .881.15zm-8.52 7.79q-.795 1.14-2.22 1.71-1.42.559-3.31.559-1.91 0-3.39-.892-1.48-.902-2.3-2.56-.806-1.65-.827-3.83v-1.36q0-3.53 1.64-5.48 1.65-1.94 4.64-1.94 2.45 0 3.94 1.26 1.49 1.25 1.83 3.54h-2.06q-.58-3.1-3.7-3.1-2.07 0-3.15 1.46-1.06 1.45-1.07 4.21v1.28q0 2.63 1.2 4.19 1.2 1.55 3.25 1.55 1.16 0 2.03-.258.87-.258 1.44-.87v-3.51h-3.62v-1.68h5.67zm-29.9-3.87q0-1.71.666-3.07.677-1.36 1.87-2.11 1.2-.741 2.74-.741 2.37 0 3.83 1.64 1.47 1.64 1.47 4.37v.14q0 1.7-.655 3.05-.645 1.34-1.86 2.09-1.2.752-2.77.752-2.36 0-3.83-1.64-1.46-1.64-1.46-4.35zm2 .236q0 1.93.892 3.1.902 1.17 2.41 1.17 1.51 0 2.41-1.18.892-1.19.892-3.33 0-1.91-.913-3.09-.902-1.19-2.41-1.19-1.47 0-2.37 1.17-.902 1.17-.902 3.35zm-5.51-8.75v2.81h2.17v1.54h-2.17v7.21q0 .698.29 1.05.29.344.988.344.344 0 .945-.129v1.61q-.784.215-1.53.215-1.33 0-2.01-.806-.677-.806-.677-2.29v-7.21h-2.12v-1.54h2.12v-2.81zm-14.5 14.7q-2.36 0-3.85-1.55-1.48-1.56-1.48-4.16v-.365q0-1.73.655-3.08.666-1.36 1.85-2.13 1.19-.773 2.58-.773 2.27 0 3.52 1.49 1.26 1.49 1.26 4.28v.827h-7.87q.043 1.72.999 2.78.967 1.05 2.45 1.05 1.05 0 1.78-.43t1.28-1.14l1.21.945q-1.46 2.25-4.38 2.25zm-.247-10.4q-1.2 0-2.02.881-.816.87-1.01 2.45h5.82v-.15q-.086-1.51-.816-2.34-.73-.838-1.98-.838zm-8.83-4.23v2.81h2.17v1.54h-2.17v7.21q0 .698.29 1.05.29.344.988.344.344 0 .945-.129v1.61q-.784.215-1.53.215-1.33 0-2.01-.806-.677-.806-.677-2.29v-7.21h-2.12v-1.54h2.12v-2.81zm-5.64 14.4h-1.99v-11.6h1.99zm-2.15-14.7q0-.483.29-.816.301-.333.881-.333t.881.333.301.816-.301.806q-.301.322-.881.322t-.881-.322q-.29-.322-.29-.806zm-6.6 12l2.88-8.93h2.03l-4.17 11.6h-1.51l-4.21-11.6h2.03zm-13.9-8.93l.064 1.46q1.33-1.68 3.48-1.68 3.68 0 3.72 4.16v7.68h-1.99v-7.69q-.01-1.26-.58-1.86-.559-.602-1.75-.602-.967 0-1.7.516-.73.516-1.14 1.35v8.28h-1.99v-11.6zm-5.1 11.6h-2.06v-15.6h2.06z"
      />
      <rect
        fill={getColor({ variable: `fastScrollInactive` })}
        x={460}
        y={122}
        width={6.75}
        height={40.2}
        rx={2.5}
      />
      <rect y={106} width="100%" height={1} opacity={0.2} />
      <rect fill={getColor({ variable: `actionBarDefault` })} width="100%" height={106} />
      <rect width="100%" height={32} opacity={0.2} />
      <path
        d="M397 6.42V4.84h-4.75v1.58h-4.75v20.6h14.2V6.42zm24.9 17.4h-2.62v-12.7l-3.86 1.32v-2.22l6.15-2.26h.336v15.8m16.1 0h-10.6v-1.81l5.13-5.6c.436-.476.792-.9 1.08-1.27s.514-.71.685-1.02c.168-.307.286-.594.354-.86.07-.262.104-.531.105-.802 0-.36-.054-.694-.156-1a2.313 2.313 0 0 0-.455-.796 2.082 2.082 0 0 0-.73-.525 2.48 2.48 0 0 0-.996-.19c-.456 0-.85.073-1.19.218s-.613.345-.832.601a2.551 2.551 0 0 0-.498.92c-.116.38-.173.776-.168 1.17h-2.63c0-.692.116-1.34.35-1.95a4.672 4.672 0 0 1 1.03-1.6 4.929 4.929 0 0 1 1.68-1.08c.664-.263 1.42-.395 2.27-.395.787 0 1.49.103 2.1.309s1.13.496 1.55.871c.424.375.744.832.965 1.37.219.537.33 1.13.33 1.79 0 .49-.08.976-.238 1.46-.16.48-.379.958-.66 1.43-.281.477-.617.955-1.01 1.43-.389.48-.814.962-1.28 1.44l-3.52 3.77h7.32v2.1m2.23-10.5c0-.418.133-.767.4-1.04s.643-.417 1.13-.417c.49 0 .87.14 1.14.417.268.278.4.626.4 1.04 0 .412-.132.752-.4 1.02-.266.27-.644.406-1.14.406-.238 0-.453-.036-.644-.108a1.355 1.355 0 0 1-.483-.303 1.33 1.33 0 0 1-.296-.455 1.523 1.523 0 0 1-.104-.563zm0 9.19c0-.418.133-.767.4-1.04s.643-.417 1.13-.417c.49 0 .87.14 1.14.417.268.278.4.626.4 1.04 0 .411-.132.752-.4 1.02-.266.27-.644.406-1.14.406-.238 0-.453-.036-.644-.108a1.355 1.355 0 0 1-.483-.303 1.33 1.33 0 0 1-.296-.455 1.523 1.523 0 0 1-.104-.563m8.69-7.77h1.56c.455 0 .848-.06 1.18-.179s.61-.283.834-.492.39-.462.498-.758c.111-.316.166-.65.162-.985 0-.75-.197-1.33-.59-1.75-.395-.415-.994-.623-1.8-.623-.345 0-.668.053-.963.157a2.286 2.286 0 0 0-.77.444 2.063 2.063 0 0 0-.507.692c-.127.288-.19.6-.186.915h-2.63c0-.62.125-1.19.373-1.72.25-.528.597-.984 1.04-1.37a4.9 4.9 0 0 1 1.59-.904 6.046 6.046 0 0 1 2.02-.325c.751 0 1.44.096 2.06.287s1.15.475 1.6.85.787.843 1.03 1.4.367 1.21.367 1.94c0 .317-.05.639-.15.963-.106.332-.26.648-.456.936a4.245 4.245 0 0 1-1.82 1.51c.484.166.893.377 1.23.633a3.484 3.484 0 0 1 1.28 1.9c.097.368.146.747.146 1.14 0 .736-.136 1.39-.4 1.97a4.158 4.158 0 0 1-1.11 1.46 4.98 4.98 0 0 1-1.68.898c-.679.21-1.39.314-2.1.308a6.765 6.765 0 0 1-1.96-.28 4.938 4.938 0 0 1-1.65-.84 4.116 4.116 0 0 1-1.14-1.39c-.283-.557-.422-1.2-.422-1.93h2.63c0 .346.062.664.183.953.123.289.297.536.52.741.224.206.493.364.812.476.342.116.701.173 1.06.168.815 0 1.46-.216 1.93-.65.469-.432.703-1.06.703-1.88 0-.447-.068-.833-.207-1.16-.137-.325-.332-.593-.584-.806s-.559-.37-.914-.471a4.44 4.44 0 0 0-1.21-.15h-1.56v-2.08m19.8 2.45c0 1.25-.122 2.31-.366 3.18-.246.87-.593 1.58-1.04 2.12-.427.53-.985.939-1.62 1.19-.63.245-1.34.368-2.12.368-.772 0-1.48-.123-2.11-.368a3.905 3.905 0 0 1-1.63-1.19c-.455-.544-.807-1.25-1.06-2.12-.248-.87-.373-1.93-.373-3.18v-2.54c0-1.25.123-2.31.37-3.17.243-.866.591-1.57 1.04-2.1s.994-.925 1.63-1.16c.634-.238 1.34-.357 2.11-.357.778 0 1.48.119 2.12.357.636.238 1.2.64 1.63 1.16.45.538.8 1.24 1.04 2.1.244.866.366 1.92.366 3.17zm-2.63-2.94c0-.8-.056-1.47-.167-2.02-.112-.543-.274-.984-.49-1.32-.22-.335-.483-.577-.8-.725a2.48 2.48 0 0 0-1.07-.222c-.404 0-.765.074-1.08.222-.314.148-.58.39-.797.725-.218.335-.382.776-.492 1.32-.111.545-.168 1.22-.168 2.02v3.32c0 .793.059 1.47.174 2.02s.281 1.01.498 1.35c.217.346.48.6.8.757.317.16.679.238 1.08.238.412 0 .771-.079 1.08-.238s.572-.411.785-.757c.213-.347.373-.797.48-1.35s.163-1.23.163-2.02v-3.32m-132 12.7l13.9-17.3c-.539-.407-5.9-4.88-13.9-4.88s-13.4 4.48-13.9 4.88l13.9 17.3.01.013h.002l.008-.013m17.4.01h22.2v-22.2z"
        fill="#fff"
      />
      <path
        fill={getColor({ variable: `actionBarDefaultIcon` })}
        d="M37 58.7L26.3 69.4v.002l10.7 10.7 1.84-1.83-7.55-7.55h16.4v-2.6h-16.4l7.52-7.52z"
      />
      <path
        fill={getColor({ variable: `actionBarDefaultSearchPlaceholder` })}
        d="M160 67.6q1.44-1.77 3.75-1.77 4.02 0 4.05 4.54v8.38h-2.17v-8.39q-.012-1.37-.633-2.03-.609-.656-1.91-.656-1.05 0-1.85.562-.797.562-1.24 1.48v9.04h-2.17v-18h2.17zm-9.64 9.61q1.16 0 2.03-.703.867-.703.961-1.76h2.05q-.059 1.09-.75 2.07-.691.984-1.85 1.57-1.15.586-2.44.586-2.59 0-4.12-1.72-1.52-1.73-1.52-4.73v-.363q0-1.85.68-3.29t1.95-2.24q1.28-.797 3.01-.797 2.13 0 3.54 1.28 1.42 1.28 1.51 3.32h-2.05q-.094-1.23-.938-2.02-.832-.797-2.06-.797-1.65 0-2.57 1.2-.902 1.18-.902 3.43v.41q0 2.19.902 3.38.902 1.18 2.58 1.18zm-6.83-9.2q-.492-.082-1.07-.082-2.13 0-2.89 1.82v9h-2.17v-12.7h2.11l.035 1.46q1.07-1.7 3.02-1.7.633 0 .961.164zm-11.4 10.7q-.188-.375-.305-1.34-1.51 1.57-3.61 1.57-1.88 0-3.08-1.05-1.2-1.07-1.2-2.7 0-1.98 1.5-3.07 1.51-1.1 4.24-1.1h2.11v-.996q0-1.14-.68-1.8-.68-.68-2-.68-1.16 0-1.95.586-.785.586-.785 1.42h-2.18q0-.949.668-1.83.68-.891 1.83-1.41 1.16-.516 2.54-.516 2.19 0 3.43 1.1 1.24 1.09 1.29 3.01v5.84q0 1.75.445 2.78v.188zm-3.6-1.65q1.02 0 1.93-.527.914-.527 1.32-1.37v-2.6h-1.7q-3.98 0-3.98 2.33 0 1.02.68 1.59.68.574 1.75.574zm-11.7 1.89q-2.58 0-4.2-1.69-1.62-1.7-1.62-4.54v-.398q0-1.89.715-3.36.727-1.49 2.02-2.32 1.3-.844 2.81-.844 2.47 0 3.84 1.63 1.37 1.63 1.37 4.66v.902h-8.59q.047 1.88 1.09 3.04 1.05 1.15 2.67 1.15 1.15 0 1.95-.469.797-.469 1.39-1.24l1.32 1.03q-1.59 2.45-4.78 2.45zm-.27-11.4q-1.31 0-2.2.961-.891.949-1.1 2.67h6.35v-.164q-.094-1.65-.891-2.55-.797-.914-2.16-.914zm-13.9 3.53q-2.89-.832-4.22-2.04-1.31-1.22-1.31-3 0-2.02 1.61-3.33 1.62-1.32 4.2-1.32 1.76 0 3.13.68 1.38.68 2.13 1.88.762 1.2.762 2.61h-2.26q0-1.55-.984-2.43-.984-.891-2.78-.891-1.66 0-2.6.738-.926.727-.926 2.03 0 1.04.879 1.77.891.715 3.01 1.31 2.13.598 3.33 1.32 1.21.715 1.78 1.68.586.961.586 2.26 0 2.07-1.62 3.33-1.62 1.24-4.32 1.24-1.76 0-3.28-.668-1.52-.68-2.36-1.85-.82-1.17-.82-2.66h2.26q0 1.55 1.14 2.45 1.15.891 3.06.891 1.78 0 2.73-.727.949-.727.949-1.98t-.879-1.93q-.879-.691-3.19-1.36z"
      />
      <g>
        <path
          fill={getColor({ variable: `actionBarDefaultIcon` })}
          d="M440 60.3c-.283.005-.656.1-1.02.463-.726.726-.383 1.5-.383 1.5l7.17 7.17-7.11 7.11s-.463.775.32 1.56c.783.783 1.56.32 1.56.32l7.11-7.11 7.11 7.11s.775.463 1.56-.32c.783-.783.32-1.56.32-1.56l-7.11-7.11 7.17-7.17s.344-.77-.383-1.5c-.726-.726-1.5-.383-1.5-.383l-7.17 7.17-7.17-7.17s-.193-.085-.477-.08z"
        />
      </g>
    </svg>
  );
};

export default InviteSearch;

