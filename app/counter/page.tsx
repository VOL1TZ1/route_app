import {Counter} from './counter';

import { Metadata } from "next";

export const metadata: Metadata = {
  title:{ 
    absolute:"Counter Page",
},
};
export default function CounterPage() {
  return (
    <div>
      <h1>Counter Page</h1>
      <Counter />
    </div>
  );
}
