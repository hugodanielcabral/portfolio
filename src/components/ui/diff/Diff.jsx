export const Diff = ({ imgBefore, imgAfter }) => {
  return (
    <div className="diff aspect-square">
      <div className="diff-item-1">
        <img
          alt={imgBefore.alt}
          className="object-contain"
          src={imgBefore.img}
        />
      </div>
      <div className="diff-item-2">
        <img alt={imgAfter.alt} className="object-contain" src={imgAfter.img} />
      </div>
      <div className="diff-resizer"></div>
    </div>
  );
};
