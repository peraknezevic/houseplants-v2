const NoImage = ({ title }: { title: string }) => {
  return (
    <div className="px-8 pb-8 pt-4 text-base">
      <p>
        We don&apos;t have an image for this plant yet. Would you like to share
        yours?
      </p>
      <p>
        Send it via e-mail at{" "}
        <a href={`mailto:houseplants.xyz@gmail.com?subject=${title} photo`}>
          houseplants.xyz@gmail.com{" "}
        </a>{" "}
        or via instagram at @houseplants.xyz
      </p>
    </div>
  );
};

export default NoImage;
