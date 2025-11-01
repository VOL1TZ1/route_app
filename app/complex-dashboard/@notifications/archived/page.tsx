import Card from "@/app/components/card";
import Link from "next/link";

export default function ArchivedNotificationsPage() {
  return (
    <Card>
      <div>Archived Notifications</div><br />
      <div>
        <Link href="/complex-dashboard">Default</Link>
      </div>
    </Card>
  );
}
