const ContentSvg = () => (
  <svg width="180" height="140" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="camera-orange-lines">
        <feColorMatrix type="saturate" values="0" result="gray" />
        <feComponentTransfer in="gray">
          <feFuncR type="table" tableValues="1 0.2" />
          <feFuncG type="table" tableValues="0.6 0.05" />
          <feFuncB type="table" tableValues="0.4 0" />
          <feFuncA type="table" tableValues="0.1 1" />
        </feComponentTransfer>
      </filter>
    </defs>
    <image href="/camera.svg" x="15" y="5" width="150" height="130" filter="url(#camera-orange-lines)" />
  </svg>
);

export default ContentSvg;
