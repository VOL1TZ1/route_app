import Card from "@/app/components/card";
import Link from "next/link";

export default function NotificationsPage() {
  return (
    <Card>
      <div>Notifications</div><br />
      <div>
        <Link href="/complex-dashboard/archived"> Archived</Link>
      </div>
    </Card>
  );
}
