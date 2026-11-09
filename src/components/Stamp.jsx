import { useId } from 'react';

export default function Stamp({ text = 'TUESTE PROPIO · BARRANCO · DESDE 2016 · ' }) {
  const id = `stamp-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <div className="stamp" aria-hidden="true">
      <svg className="stamp__ring" viewBox="0 0 200 200">
        <defs>
          <path id={id} d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <text className="stamp__label">
          <textPath href={`#${id}`} startOffset="0">
            {text}
          </textPath>
        </text>
      </svg>
      <svg className="stamp__mark" viewBox="0 0 100 100">
        <ellipse cx="50" cy="50" rx="15" ry="21.5" transform="rotate(-32 50 50)" />
        <path d="M50 30.5c-5.6 7.4 5.6 11.6 0 19.5s5.6 12.1 0 19.5" />
      </svg>
    </div>
  );
}
