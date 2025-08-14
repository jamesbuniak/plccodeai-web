"use client";

export default function SupportUsButton() {
  return (
    <button
      onClick={async () => {
        const res = await fetch('/api/stripe/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ priceId: 'price_1Rw4ZfLUmXA13VZnFFwDOBUy' })
        });
        const data = await res.json();
        if (data.url) window.location.href = data.url;
      }}
      className="inline-block rounded-full bg-yellow-400 text-black px-6 py-2 font-medium hover:bg-yellow-300 transition mt-2"
    >
      Buy us a coffee
    </button>
  );
}
