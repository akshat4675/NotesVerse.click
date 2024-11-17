import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import "@/globals.css";
import { Menu, NotebookPen } from "lucide-react";
import { SidePanel } from "./sidebar";

export function Head()

{

    return (
        <>
        <header className="flex items-center lg:pl-6  justify-between p-4 bg-transparent shadow-none">
        <div className="flex items-center lg:pt-9 space-x-4">
             <div className="w-full h-1 lg:pl-28  bg-primary rounded-full flex items-center justify-center">
             <span className="text-primary-foreground font-bold text-xl"><NotebookPen className="size-9 text-blue-600"/></span>
              </div>
               <h1 className="text-2xl lg:text-3xl font-bold text-white pr-10">NotesVerse</h1>
               </div>
        
        </header>
        </>
    )
}

export function Sheett(){
 

  
    return (
      <div>
      
      <Sheet>
            <SheetTrigger asChild>
            <Button variant="ghost" className="lg:hidden  font-white ">
            <Menu className="" />
             </Button>
            </SheetTrigger> 
            <SheetContent side="left" className=" bg-black h-full w-auto overflow-hidden ">
             <SidePanel/>
            </SheetContent>
          </Sheet>
          </div>
    )
  }