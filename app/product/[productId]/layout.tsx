function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
const random = getRandomInt(2);

    if (random === 0) {
        throw new Error("Random error occurred while fetching product page.");
    }

  return (
    <div>
      <h1>Product Layout</h1>
      {children}
    </div>
  );
}
