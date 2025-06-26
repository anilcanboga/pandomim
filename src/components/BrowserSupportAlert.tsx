import { ScreenShareOff } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

export default function BrowserSupportAlert() {
  return (
    <AlertDialog defaultOpen={true}>
      <AlertDialogContent className="font-june">
        <AlertDialogHeader>
          <AlertDialogTitle asChild>
            <div className="inline-flex gap-2">
              <ScreenShareOff /> Desteklenmeyen tarayıcı
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            Hareket tanıma tarayıcınızda çalışmayacak, ancak yakında gelecek.
            Diğer insanlar tarafından yapılan hareketleri görmeye devam
            edeceksiniz.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>OK</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
