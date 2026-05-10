import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@repo/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@repo/ui/alert-dialog";
import { Alert, AlertDescription, AlertTitle } from "@repo/ui/alert";
import { AspectRatio } from "@repo/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@repo/ui/avatar";
import { Badge } from "@repo/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@repo/ui/breadcrumb";
import { Button } from "@repo/ui/button";
import { ButtonGroup } from "@repo/ui/button-group";
import { Calendar } from "@repo/ui/calendar";
import { Checkbox } from "@repo/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@repo/ui/collapsible";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@repo/ui/combobox";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandShortcut } from "@repo/ui/command";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@repo/ui/context-menu";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@repo/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@repo/ui/dialog";
import { DirectionProvider } from "@repo/ui/direction";
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@repo/ui/drawer";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@repo/ui/dropdown-menu";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@repo/ui/empty";
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@repo/ui/field";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@repo/ui/hover-card";
import { Input } from "@repo/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@repo/ui/input-group";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@repo/ui/input-otp";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@repo/ui/item";
import { Kbd, KbdGroup } from "@repo/ui/kbd";
import { Label } from "@repo/ui/label";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@repo/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@repo/ui/navigation-menu";
import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "@repo/ui/native-select";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@repo/ui/pagination";
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@repo/ui/popover";
import { Progress } from "@repo/ui/progress";
import { RadioGroup, RadioGroupItem } from "@repo/ui/radio-group";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@repo/ui/resizable";
import { ScrollArea } from "@repo/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui/select";
import { Separator } from "@repo/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@repo/ui/sheet";
import { Skeleton } from "@repo/ui/skeleton";
import { Slider } from "@repo/ui/slider";
import { Spinner } from "@repo/ui/spinner";
import { Switch } from "@repo/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/tabs";
import { Textarea } from "@repo/ui/textarea";
import { Toggle } from "@repo/ui/toggle";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui/tooltip";
import { CircleAlertIcon, PlusIcon } from "lucide-react";

import type { InlineDemoEntry } from "@repo/docs";
import {
  CarouselGalleryDemo,
  ChartRevenueDemo,
  SidebarLayoutDemo,
  SonnerToastDemo,
  ToggleGroupDemo,
} from "@/components/docs/demos/client-heavy-demos";
import Link from "next/link";

function ButtonPairDemo() {
  return (
    <div className="grid gap-6">
      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Variants
        </p>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link button</Button>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Sizes
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">XS</Button>
          <Button size="sm">SM</Button>
          <Button>Default</Button>
          <Button size="lg">LG</Button>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Icon sizes
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button aria-label="Add item extra small" size="icon-xs">
            <PlusIcon />
          </Button>
          <Button aria-label="Add item small" size="icon-sm">
            <PlusIcon />
          </Button>
          <Button aria-label="Add item default" size="icon">
            <PlusIcon />
          </Button>
          <Button aria-label="Add item large" size="icon-lg">
            <PlusIcon />
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          States
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>
            Disabled outline
          </Button>
        </div>
      </div>
    </div>
  );
}

function CardLayoutDemo() {
  return (
    <Card className="max-w-xl">
      <CardHeader>
        <div>
          <CardTitle>Shared team updates</CardTitle>
          <CardDescription>
            Keep release notes, experiments, and internal guidance in one surface.
          </CardDescription>
        </div>
        <CardAction>
          <Badge variant="outline">Updated</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-muted-foreground">
        <p>Each card inherits the shared color tokens and radius scale from `@repo/ui`.</p>
        <p>That keeps product-level pages consistent without hardcoding app-specific styles.</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">Review</Button>
        <Button size="sm" variant="outline">
          Share
        </Button>
      </CardFooter>
    </Card>
  );
}

function InputStatesDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="space-y-2">
        <Label htmlFor="demo-name">Component name</Label>
        <Input id="demo-name" placeholder="Button" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="demo-owner">Owner</Label>
        <Input id="demo-owner" placeholder="Design systems" />
      </div>
    </div>
  );
}

function DialogFlowDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open flow</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ship the shared component update</DialogTitle>
          <DialogDescription>
            Review the copy, confirm the API surface, and publish the package when you are ready.
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-2">
          <Button>Publish</Button>
          <Button variant="outline">Save draft</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function AccordionDemo() {
  return (
    <Accordion className="max-w-2xl" type="single" collapsible>
      <AccordionItem value="token-source">
        <AccordionTrigger>Where do the colors come from?</AccordionTrigger>
        <AccordionContent>
          The shared primitives read from the tokens defined in
          `packages/ui/src/styles/globals.css`.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="routing">
        <AccordionTrigger>Where should docs pages live?</AccordionTrigger>
        <AccordionContent>
          Editorial content, component metadata, and search data all live in
          `apps/ui`.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function TabsPreviewDemo() {
  return (
    <Tabs defaultValue="preview" className="max-w-xl">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="tokens">Tokens</TabsTrigger>
        <TabsTrigger value="notes">Notes</TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="rounded-3xl border bg-background p-4">
        Live previews sit next to source snippets so people can inspect both quickly.
      </TabsContent>
      <TabsContent value="tokens" className="rounded-3xl border bg-background p-4">
        Keep visual decisions inside shared tokens, not duplicated in each app.
      </TabsContent>
      <TabsContent value="notes" className="rounded-3xl border bg-background p-4">
        Tabs work well for short, peer views that share the same context.
      </TabsContent>
    </Tabs>
  );
}

function TableSummaryDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Component</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Owner</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Button</TableCell>
          <TableCell>Stable</TableCell>
          <TableCell>UI package</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Dialog</TableCell>
          <TableCell>Stable</TableCell>
          <TableCell>UI package</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Sidebar</TableCell>
          <TableCell>Stable</TableCell>
          <TableCell>Docs shell</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

function BadgeToneDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
  );
}

function SwitchSettingsDemo() {
  return (
    <div className="max-w-xl rounded-[1.5rem] border border-border/80 bg-background/80 p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="font-medium">Email digests</p>
          <p className="text-sm text-muted-foreground">
            Send a weekly summary to everyone on the project.
          </p>
        </div>
        <Switch aria-label="Toggle email digests" defaultChecked />
      </div>
    </div>
  );
}

function CheckboxListDemo() {
  return (
    <div className="space-y-3">
      <label className="flex items-center gap-3 rounded-2xl border border-border/80 p-3">
        <Checkbox aria-label="Ship sidebar updates" defaultChecked />
        <span className="text-sm">Ship sidebar updates</span>
      </label>
      <label className="flex items-center gap-3 rounded-2xl border border-border/80 p-3">
        <Checkbox aria-label="Ship docs search" />
        <span className="text-sm">Ship docs search</span>
      </label>
    </div>
  );
}

function SelectPlanDemo() {
  return (
    <Select defaultValue="starter">
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Select a plan" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="starter">Starter</SelectItem>
        <SelectItem value="growth">Growth</SelectItem>
        <SelectItem value="scale">Scale</SelectItem>
      </SelectContent>
    </Select>
  );
}

function TextareaFeedbackDemo() {
  return (
    <div className="max-w-xl space-y-2">
      <Label htmlFor="feedback-note">Release notes</Label>
      <Textarea
        id="feedback-note"
        placeholder="Summarize the changes in this release..."
      />
    </div>
  );
}

function SliderVolumeDemo() {
  return (
    <div className="max-w-xl space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span>Volume</span>
        <span className="text-muted-foreground">68%</span>
      </div>
      <Slider aria-label="Volume" className="w-full" defaultValue={[68]} max={100} />
    </div>
  );
}

function ProgressStatusDemo() {
  return (
    <div className="max-w-xl space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span>Publishing docs</span>
        <span className="text-muted-foreground">68%</span>
      </div>
      <Progress value={68} />
    </div>
  );
}

function AlertInlineDemo() {
  return (
    <Alert className="max-w-xl">
      <CircleAlertIcon />
      <AlertTitle>Unsaved changes</AlertTitle>
      <AlertDescription>
        Publish or save this draft before leaving the page.
      </AlertDescription>
    </Alert>
  );
}

function AvatarGroupDemo() {
  return (
    <AvatarGroup>
      <Avatar size="lg">
        <AvatarFallback>FN</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>UI</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>DS</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+2</AvatarGroupCount>
    </AvatarGroup>
  );
}

function RadioPreferenceDemo() {
  return (
    <RadioGroup className="max-w-xl gap-3" defaultValue="weekly">
      <label className="flex items-center gap-3 rounded-2xl border border-border/80 p-3">
        <RadioGroupItem aria-label="Weekly updates" value="weekly" />
        <span className="text-sm">Weekly updates</span>
      </label>
      <label className="flex items-center gap-3 rounded-2xl border border-border/80 p-3">
        <RadioGroupItem aria-label="Instant updates" value="instant" />
        <span className="text-sm">Instant updates</span>
      </label>
    </RadioGroup>
  );
}

function SeparatorContentDemo() {
  return (
    <div className="max-w-xl rounded-[1.5rem] border border-border/80 p-4">
      <div className="space-y-3">
        <div>
          <p className="font-medium">Overview</p>
          <p className="text-sm text-muted-foreground">A short summary of the current release.</p>
        </div>
        <Separator />
        <div>
          <p className="font-medium">Details</p>
          <p className="text-sm text-muted-foreground">Longer implementation notes and rollout guidance.</p>
        </div>
      </div>
    </div>
  );
}

function TooltipHintDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover for hint</Button>
        </TooltipTrigger>
        <TooltipContent>Shared previews live next to code examples.</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function PopoverQuickviewDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open details</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Draft status</PopoverTitle>
          <PopoverDescription>
            This release is ready for review and waiting on final approval.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}

function SheetPanelDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Release checklist</SheetTitle>
          <SheetDescription>
            Review the final handoff items before shipping this update.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

function PaginationBasicDemo() {
  return (
    <Pagination className="justify-start">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

function ButtonGroupDemo() {
  return (
    <ButtonGroup>
      <Button variant="outline">Back</Button>
      <Button variant="outline">Preview</Button>
      <Button>Publish</Button>
    </ButtonGroup>
  );
}

function ToggleStatesDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Toggle aria-label="Toggle bold">Bold</Toggle>
      <Toggle aria-label="Toggle preview" defaultPressed>
        Preview
      </Toggle>
      <Toggle aria-label="Toggle pin">Pin</Toggle>
    </div>
  );
}

function CalendarPickerDemo() {
  return (
    <div className="max-w-xl rounded-[1.5rem] border border-border/80 bg-background p-3">
      <Calendar mode="single" selected={new Date(2026, 3, 19)} />
    </div>
  );
}

function ComboboxOwnerDemo() {
  return (
    <div className="max-w-sm">
      <Combobox defaultValue="design-systems">
        <ComboboxInput placeholder="Assign owner" showClear />
        <ComboboxContent>
          <ComboboxEmpty>No owner found.</ComboboxEmpty>
          <ComboboxList>
            <ComboboxItem value="design-systems">Design systems</ComboboxItem>
            <ComboboxItem value="platform">Platform</ComboboxItem>
            <ComboboxItem value="product-design">Product design</ComboboxItem>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

function FieldFeedbackDemo() {
  return (
    <div className="max-w-xl">
      <FieldGroup>
        <Field>
          <FieldContent>
            <FieldLabel htmlFor="release-name">Release name</FieldLabel>
            <Input id="release-name" placeholder="Q2 docs refresh" />
            <FieldDescription>
              Keep labels, inputs, hints, and validation messaging grouped together.
            </FieldDescription>
          </FieldContent>
        </Field>
        <Field>
          <FieldContent>
            <FieldLabel htmlFor="reviewer-name">Reviewer</FieldLabel>
            <Input id="reviewer-name" placeholder="Design systems" />
            <FieldError>Needs one approving reviewer before publishing.</FieldError>
          </FieldContent>
        </Field>
      </FieldGroup>
    </div>
  );
}

function InputGroupUrlDemo() {
  return (
    <InputGroup className="max-w-xl">
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="fera.so/components" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="sm" variant="outline">
          Check
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}

function InputOtpCodeDemo() {
  return (
    <div className="max-w-xl space-y-2">
      <p className="text-sm text-muted-foreground">Verification code</p>
      <InputOTP defaultValue="280426" maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}

function LabelPairingDemo() {
  return (
    <div className="max-w-xs space-y-2">
      <Label htmlFor="project-slug">Project slug</Label>
      <Input id="project-slug" placeholder="fera-ui" />
    </div>
  );
}

function NativeSelectCountryDemo() {
  return (
    <NativeSelect className="w-64" defaultValue="uk">
      <NativeSelectOptGroup label="Europe">
        <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
        <NativeSelectOption value="de">Germany</NativeSelectOption>
        <NativeSelectOption value="fr">France</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  );
}

function BreadcrumbTrailDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="#">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="#">Components</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Switch</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function CommandPaletteDemo() {
  return (
    <Command className="max-w-xl rounded-[1.5rem] border border-border/80">
      <CommandInput placeholder="Search components..." />
      <CommandList>
        <CommandEmpty>No matching component.</CommandEmpty>
        <CommandGroup heading="Components">
          <CommandItem>
            Button
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            Dialog
            <CommandShortcut>⌘D</CommandShortcut>
          </CommandItem>
          <CommandItem>
            Sidebar
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

function MenubarToolsDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New draft</MenubarItem>
          <MenubarItem>Duplicate</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Rename</MenubarItem>
          <MenubarItem>Archive</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

function NavigationMenuPreviewDemo() {
  return (
    <NavigationMenu className="max-w-xl">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[320px] gap-2 p-4">
              <a className="rounded-xl border border-border/80 p-3 text-sm hover:bg-muted/60" href="#">
                Buttons and actions
              </a>
              <a className="rounded-xl border border-border/80 p-3 text-sm hover:bg-muted/60" href="#">
                Forms and inputs
              </a>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="rounded-4xl px-3 py-2 text-sm" href="#">
            Patterns
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  );
}

function AlertDialogConfirmDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete draft</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this draft?</AlertDialogTitle>
          <AlertDialogDescription>
            This action removes the working copy and cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function ContextMenuActionsDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-28 max-w-xl items-center justify-center rounded-[1.5rem] border border-dashed border-border/80 px-6 text-sm text-muted-foreground">
        Right click this surface
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuItem>Rename</ContextMenuItem>
        <ContextMenuItem>Archive</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

function DrawerMobileDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Publish checklist</DrawerTitle>
          <DrawerDescription>
            A bottom sheet keeps short secondary flows mobile-friendly.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Continue</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function DropdownActionsDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>View details</DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Archive</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function HoverCardProfileDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button className="px-0" variant="link">
          Hover the release owner
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="space-y-1">
          <p className="font-medium">Design systems</p>
          <p className="text-sm text-muted-foreground">
            Maintains the shared token layer and component primitives.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

function AspectRatioMediaDemo() {
  return (
    <div className="max-w-xl">
      <AspectRatio className="overflow-hidden rounded-[1.5rem] border border-border/80 bg-muted/40" ratio={16 / 9}>
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          16:9 media preview
        </div>
      </AspectRatio>
    </div>
  );
}

function CollapsibleDetailsDemo() {
  return (
    <Collapsible className="max-w-xl rounded-[1.5rem] border border-border/80 p-4" defaultOpen>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-medium">Release notes</p>
          <p className="text-sm text-muted-foreground">Show or hide the longer summary.</p>
        </div>
        <CollapsibleTrigger asChild>
          <Button size="sm" variant="outline">
            Toggle
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="pt-4 text-sm text-muted-foreground">
        Keep long supporting details available without forcing the full page to stay expanded.
      </CollapsibleContent>
    </Collapsible>
  );
}

function DirectionRtlDemo() {
  return (
    <DirectionProvider direction="rtl">
      <div className="max-w-xl rounded-[1.5rem] border border-border/80 p-4" dir="rtl">
        <p className="mb-3 text-sm font-medium">واجهة من اليمين إلى اليسار</p>
        <ButtonGroup>
          <Button variant="outline">رجوع</Button>
          <Button>متابعة</Button>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  );
}

function EmptyStateDemo() {
  return (
    <Empty className="max-w-xl rounded-[1.5rem] border border-border/80">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <CircleAlertIcon />
        </EmptyMedia>
        <EmptyTitle>No components matched</EmptyTitle>
        <EmptyDescription>
          Try a different filter or create a new primitive to get started.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create component</Button>
      </EmptyContent>
    </Empty>
  );
}

function ItemSummaryDemo() {
  return (
    <ItemGroup className="max-w-xl">
      <Item className="rounded-[1.5rem]" variant="outline">
        <ItemMedia variant="icon">
          <CircleAlertIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Sidebar rollout</ItemTitle>
          <ItemDescription>Responsive navigation shell ready for review.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Badge variant="outline">Stable</Badge>
        </ItemActions>
      </Item>
      <Item className="rounded-[1.5rem]" variant="outline">
        <ItemMedia variant="icon">
          <CircleAlertIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Command palette</ItemTitle>
          <ItemDescription>Keyboard-first search surface for dense docs navigation.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Badge variant="secondary">Beta</Badge>
        </ItemActions>
      </Item>
    </ItemGroup>
  );
}

function ResizablePanelsDemo() {
  return (
    <div className="max-w-xl overflow-hidden rounded-[1.5rem] border border-border/80">
      <ResizablePanelGroup className="min-h-[220px]" orientation="horizontal">
        <ResizablePanel defaultSize={36}>
          <div className="flex h-full items-center justify-center bg-muted/40 p-4 text-sm text-muted-foreground">
            Navigation
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={64}>
          <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">
            Preview
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

function ScrollAreaLogDemo() {
  return (
    <ScrollArea className="h-48 max-w-xl rounded-[1.5rem] border border-border/80 p-4">
      <div className="space-y-3">
        {[
          "Generated component docs tree.",
          "Synced shared color tokens.",
          "Updated command search index.",
          "Published the latest sidebar preview.",
          "Queued a follow-up accessibility review.",
          "Opened the beta feedback window.",
          "Captured final release notes.",
        ].map((entry) => (
          <div className="rounded-2xl border border-border/70 px-3 py-2 text-sm text-muted-foreground" key={entry}>
            {entry}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

function SkeletonLoadingDemo() {
  return (
    <div className="max-w-xl space-y-3">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-16 w-full rounded-[1.25rem]" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}

function SpinnerInlineDemo() {
  return (
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      <Spinner className="size-5" />
      <span>Syncing package updates...</span>
    </div>
  );
}

function KbdShortcutDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm">
      <span>Open search</span>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </div>
  );
}

const demos: Record<string, InlineDemoEntry> = {
  "button-pair": {
    id: "button-pair",
    title: "Complete button matrix",
    description: "Variants, sizes, icon sizes, and state patterns for the shared button primitive.",
    code: `import { Button } from "@repo/ui/button"
import { PlusIcon } from "lucide-react"

export function Example() {
  return (
    <div className="grid gap-6">
      <div className="flex flex-wrap gap-3">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link button</Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button size="xs">XS</Button>
        <Button size="sm">SM</Button>
        <Button>Default</Button>
        <Button size="lg">LG</Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button size="icon-xs"><PlusIcon /></Button>
        <Button size="icon-sm"><PlusIcon /></Button>
        <Button size="icon"><PlusIcon /></Button>
        <Button size="icon-lg"><PlusIcon /></Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button disabled>Disabled</Button>
        <Button disabled variant="outline">Disabled outline</Button>
      </div>
    </div>
  )
}`,
    component: ButtonPairDemo,
  },
  "card-layout": {
    id: "card-layout",
    title: "Surface composition",
    description: "A flexible card layout with header, content, and footer slots.",
    code: `import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/card"

export function Example() {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Shared team updates</CardTitle>
          <CardDescription>
            Keep release notes, experiments, and guidance in one surface.
          </CardDescription>
        </div>
        <CardAction />
      </CardHeader>
      <CardContent />
      <CardFooter />
    </Card>
  )
}`,
    component: CardLayoutDemo,
  },
  "input-states": {
    id: "input-states",
    title: "Simple form row",
    description: "Inputs inherit the shared token palette and rounded field treatment.",
    code: `import { Input } from "@repo/ui/input"
import { Label } from "@repo/ui/label"

export function Example() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="space-y-2">
        <Label htmlFor="component-name">Component name</Label>
        <Input id="component-name" placeholder="Button" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="owner">Owner</Label>
        <Input id="owner" placeholder="Design systems" />
      </div>
    </div>
  )
}`,
    component: InputStatesDemo,
  },
  "dialog-flow": {
    id: "dialog-flow",
    title: "Focused modal flow",
    description: "A concise dialog flow for actions that need explicit confirmation.",
    code: `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/dialog"
import { Button } from "@repo/ui/button"

export function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open flow</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ship the shared component update</DialogTitle>
          <DialogDescription>
            Review the copy, confirm the API surface, and publish the package when you are ready.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}`,
    component: DialogFlowDemo,
  },
  "accordion-overview": {
    id: "accordion-overview",
    title: "Progressive disclosure",
    description: "Accordion items help compress dense guidance without hiding important structure.",
    code: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/accordion"

export function Example() {
  return (
    <Accordion className="max-w-2xl" type="single" collapsible>
      <AccordionItem value="token-source">
        <AccordionTrigger>Where do the colors come from?</AccordionTrigger>
        <AccordionContent>
          The shared primitives read from the tokens defined in packages/ui.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
    component: AccordionDemo,
  },
  "tabs-preview": {
    id: "tabs-preview",
    title: "Peer views",
    description: "Tabs are useful when multiple views share context and should stay close together.",
    code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/tabs"

export function Example() {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="tokens">Tokens</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">Live previews sit next to code.</TabsContent>
      <TabsContent value="tokens">Keep visual choices inside shared tokens.</TabsContent>
    </Tabs>
  )
}`,
    component: TabsPreviewDemo,
  },
  "table-summary": {
    id: "table-summary",
    title: "Structured status list",
    description: "Tables make ownership and rollout status easy to scan.",
    code: `import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/table"

export function Example() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Component</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Owner</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody />
    </Table>
  )
}`,
    component: TableSummaryDemo,
  },
  "badge-tones": {
    id: "badge-tones",
    title: "Status accents",
    description: "Badges are useful for light metadata and rollout labels.",
    code: `import { Badge } from "@repo/ui/badge"

export function Example() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
  )
}`,
    component: BadgeToneDemo,
  },
  "switch-settings": {
    id: "switch-settings",
    title: "Binary toggle",
    description: "Switches work well for immediate on/off settings.",
    code: `import { Switch } from "@repo/ui/switch"

export function Example() {
  return <Switch aria-label="Toggle email digests" defaultChecked />
}`,
    component: SwitchSettingsDemo,
  },
  "checkbox-list": {
    id: "checkbox-list",
    title: "Checklist row",
    description: "Checkboxes are useful for multi-select or completion-style tasks.",
    code: `import { Checkbox } from "@repo/ui/checkbox"

export function Example() {
  return (
    <label className="flex items-center gap-3">
      <Checkbox aria-label="Ship sidebar updates" defaultChecked />
      <span>Ship sidebar updates</span>
    </label>
  )
}`,
    component: CheckboxListDemo,
  },
  "select-plan": {
    id: "select-plan",
    title: "Single-choice menu",
    description: "Select menus help people choose one option from a longer list.",
    code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/select"

export function Example() {
  return (
    <Select defaultValue="starter">
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Select a plan" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="starter">Starter</SelectItem>
      </SelectContent>
    </Select>
  )
}`,
    component: SelectPlanDemo,
  },
  "textarea-feedback": {
    id: "textarea-feedback",
    title: "Long-form field",
    description: "Textareas give longer feedback or summary input more room to breathe.",
    code: `import { Textarea } from "@repo/ui/textarea"

export function Example() {
  return <Textarea placeholder="Summarize the changes in this release..." />
}`,
    component: TextareaFeedbackDemo,
  },
  "slider-volume": {
    id: "slider-volume",
    title: "Range control",
    description: "Sliders are useful for quick numeric adjustment inside a bounded range.",
    code: `import { Slider } from "@repo/ui/slider"

export function Example() {
  return <Slider aria-label="Volume" defaultValue={[68]} max={100} />
}`,
    component: SliderVolumeDemo,
  },
  "progress-status": {
    id: "progress-status",
    title: "Progress state",
    description: "Progress bars communicate current completion without blocking the surrounding layout.",
    code: `import { Progress } from "@repo/ui/progress"

export function Example() {
  return <Progress value={68} />
}`,
    component: ProgressStatusDemo,
  },
  "alert-inline": {
    id: "alert-inline",
    title: "Inline callout",
    description: "Alerts are useful for status, warnings, and guidance that should stay inline.",
    code: `import { Alert, AlertDescription, AlertTitle } from "@repo/ui/alert"
import { CircleAlertIcon } from "lucide-react"

export function Example() {
  return (
    <Alert>
      <CircleAlertIcon />
      <AlertTitle>Unsaved changes</AlertTitle>
      <AlertDescription>Publish or save this draft before leaving.</AlertDescription>
    </Alert>
  )
}`,
    component: AlertInlineDemo,
  },
  "avatar-group": {
    id: "avatar-group",
    title: "Presence cluster",
    description: "Avatars work well for people, reviewers, and shared ownership indicators.",
    code: `import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@repo/ui/avatar"

export function Example() {
  return (
    <AvatarGroup>
      <Avatar><AvatarFallback>FN</AvatarFallback></Avatar>
      <AvatarGroupCount>+2</AvatarGroupCount>
    </AvatarGroup>
  )
}`,
    component: AvatarGroupDemo,
  },
  "radio-preference": {
    id: "radio-preference",
    title: "Single-select choice",
    description: "Radio groups help with mutually exclusive choices in a compact layout.",
    code: `import { RadioGroup, RadioGroupItem } from "@repo/ui/radio-group"

export function Example() {
  return (
    <RadioGroup defaultValue="weekly">
      <RadioGroupItem aria-label="Weekly updates" value="weekly" />
    </RadioGroup>
  )
}`,
    component: RadioPreferenceDemo,
  },
  "separator-content": {
    id: "separator-content",
    title: "Section divider",
    description: "Separators create visual rhythm between related blocks of content.",
    code: `import { Separator } from "@repo/ui/separator"

export function Example() {
  return (
    <div>
      <p>Overview</p>
      <Separator />
      <p>Details</p>
    </div>
  )
}`,
    component: SeparatorContentDemo,
  },
  "tooltip-hint": {
    id: "tooltip-hint",
    title: "Hover hint",
    description: "Tooltips add lightweight clarification to compact controls.",
    code: `import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui/tooltip"
import { Button } from "@repo/ui/button"

export function Example() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover for hint</Button>
        </TooltipTrigger>
        <TooltipContent>Shared previews live next to code examples.</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`,
    component: TooltipHintDemo,
  },
  "popover-quickview": {
    id: "popover-quickview",
    title: "Anchored details",
    description: "Popovers work well for short, secondary details and actions.",
    code: `import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@repo/ui/popover"
import { Button } from "@repo/ui/button"

export function Example() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open details</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Draft status</PopoverTitle>
          <PopoverDescription>This release is ready for review.</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}`,
    component: PopoverQuickviewDemo,
  },
  "sheet-panel": {
    id: "sheet-panel",
    title: "Sliding panel",
    description: "Sheets are useful for side tasks and mobile-friendly secondary flows.",
    code: `import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@repo/ui/sheet"
import { Button } from "@repo/ui/button"

export function Example() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Release checklist</SheetTitle>
          <SheetDescription>Review the final handoff items before shipping.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}`,
    component: SheetPanelDemo,
  },
  "pagination-basic": {
    id: "pagination-basic",
    title: "Page navigation",
    description: "Pagination keeps long result sets navigable without overwhelming the page.",
    code: `import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@repo/ui/pagination"

export function Example() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationEllipsis /></PaginationItem>
        <PaginationItem><PaginationNext href="#" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}`,
    component: PaginationBasicDemo,
  },
  "button-group-actions": {
    id: "button-group-actions",
    title: "Grouped actions",
    description: "Button groups keep sibling actions visually connected without losing hierarchy.",
    code: `import { Button } from "@repo/ui/button"
import { ButtonGroup } from "@repo/ui/button-group"

export function Example() {
  return (
    <ButtonGroup>
      <Button variant="outline">Back</Button>
      <Button variant="outline">Preview</Button>
      <Button>Publish</Button>
    </ButtonGroup>
  )
}`,
    component: ButtonGroupDemo,
  },
  "toggle-states": {
    id: "toggle-states",
    title: "Pressed states",
    description: "Toggles work well for independent pressed and unpressed controls.",
    code: `import { Toggle } from "@repo/ui/toggle"

export function Example() {
  return (
    <div className="flex gap-3">
      <Toggle aria-label="Toggle bold">Bold</Toggle>
      <Toggle aria-label="Toggle preview" defaultPressed>
        Preview
      </Toggle>
    </div>
  )
}`,
    component: ToggleStatesDemo,
  },
  "toggle-group-view": {
    id: "toggle-group-view",
    title: "Exclusive selection",
    description: "Toggle groups are useful when someone should pick one view or mode.",
    code: `import { ToggleGroup, ToggleGroupItem } from "@repo/ui/toggle-group"

export function Example() {
  return (
    <ToggleGroup defaultValue="grid" type="single">
      <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
      <ToggleGroupItem value="list">List</ToggleGroupItem>
      <ToggleGroupItem value="board">Board</ToggleGroupItem>
    </ToggleGroup>
  )
}`,
    component: ToggleGroupDemo,
  },
  "calendar-picker": {
    id: "calendar-picker",
    title: "Date selection",
    description: "Calendars are useful for inline scheduling and date picking.",
    code: `import { Calendar } from "@repo/ui/calendar"

export function Example() {
  return <Calendar mode="single" selected={new Date(2026, 3, 19)} />
}`,
    component: CalendarPickerDemo,
  },
  "combobox-owner": {
    id: "combobox-owner",
    title: "Searchable choice",
    description: "Comboboxes help when the list is longer and search should stay close to selection.",
    code: `import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@repo/ui/combobox"

export function Example() {
  return (
    <Combobox defaultValue="design-systems">
      <ComboboxInput placeholder="Assign owner" showClear />
      <ComboboxContent>
        <ComboboxEmpty>No owner found.</ComboboxEmpty>
        <ComboboxList>
          <ComboboxItem value="design-systems">Design systems</ComboboxItem>
          <ComboboxItem value="platform">Platform</ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`,
    component: ComboboxOwnerDemo,
  },
  "field-feedback": {
    id: "field-feedback",
    title: "Field scaffolding",
    description: "Field primitives keep labels, descriptions, and errors structured around the input.",
    code: `import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@repo/ui/field"
import { Input } from "@repo/ui/input"

export function Example() {
  return (
    <FieldGroup>
      <Field>
        <FieldContent>
          <FieldLabel htmlFor="release-name">Release name</FieldLabel>
          <Input id="release-name" placeholder="Q2 docs refresh" />
          <FieldDescription>Shown in internal updates and handoff notes.</FieldDescription>
        </FieldContent>
      </Field>
      <Field>
        <FieldContent>
          <FieldLabel htmlFor="reviewer-name">Reviewer</FieldLabel>
          <Input id="reviewer-name" placeholder="Design systems" />
          <FieldError>Needs one approving reviewer before publishing.</FieldError>
        </FieldContent>
      </Field>
    </FieldGroup>
  )
}`,
    component: FieldFeedbackDemo,
  },
  "input-group-url": {
    id: "input-group-url",
    title: "Composed field",
    description: "Input groups combine add-ons, text, and actions into one cohesive field.",
    code: `import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@repo/ui/input-group"

export function Example() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="fera.so/components" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="sm" variant="outline">Check</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}`,
    component: InputGroupUrlDemo,
  },
  "input-otp-code": {
    id: "input-otp-code",
    title: "Verification input",
    description: "Input OTP slots make multi-digit verification flows easier to scan.",
    code: `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@repo/ui/input-otp"

export function Example() {
  return (
    <InputOTP defaultValue="280426" maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}`,
    component: InputOtpCodeDemo,
  },
  "label-pairing": {
    id: "label-pairing",
    title: "Label pairing",
    description: "Labels should stay close to the field they describe.",
    code: `import { Input } from "@repo/ui/input"
import { Label } from "@repo/ui/label"

export function Example() {
  return (
    <div className="space-y-2">
      <Label htmlFor="project-slug">Project slug</Label>
      <Input id="project-slug" placeholder="fera-ui" />
    </div>
  )
}`,
    component: LabelPairingDemo,
  },
  "native-select-country": {
    id: "native-select-country",
    title: "Native select",
    description: "Native selects are useful when browser affordances are the right tradeoff.",
    code: `import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@repo/ui/native-select"

export function Example() {
  return (
    <NativeSelect defaultValue="uk">
      <NativeSelectOptGroup label="Europe">
        <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
        <NativeSelectOption value="de">Germany</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  )
}`,
    component: NativeSelectCountryDemo,
  },
  "breadcrumb-trail": {
    id: "breadcrumb-trail",
    title: "Route context",
    description: "Breadcrumbs help people orient themselves inside deeper information structures.",
    code: `import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@repo/ui/breadcrumb"

export function Example() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="#">Components</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>Switch</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
    component: BreadcrumbTrailDemo,
  },
  "command-palette": {
    id: "command-palette",
    title: "Keyboard-first search",
    description: "Command menus keep dense action lists searchable and fast to navigate.",
    code: `import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@repo/ui/command"

export function Example() {
  return (
    <Command>
      <CommandInput placeholder="Search components..." />
      <CommandList>
        <CommandEmpty>No matching component.</CommandEmpty>
        <CommandGroup heading="Components">
          <CommandItem>Button<CommandShortcut>⌘B</CommandShortcut></CommandItem>
          <CommandItem>Dialog<CommandShortcut>⌘D</CommandShortcut></CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,
    component: CommandPaletteDemo,
  },
  "menubar-tools": {
    id: "menubar-tools",
    title: "Desktop actions",
    description: "Menubars work well for persistent desktop-style command surfaces.",
    code: `import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@repo/ui/menubar"

export function Example() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New draft</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`,
    component: MenubarToolsDemo,
  },
  "navigation-menu-preview": {
    id: "navigation-menu-preview",
    title: "Structured flyout",
    description: "Navigation menus are useful for higher-level IA with optional flyout detail.",
    code: `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@repo/ui/navigation-menu"

export function Example() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[320px] gap-2 p-4">
              <a href="#">Buttons and actions</a>
              <a href="#">Forms and inputs</a>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#">Patterns</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  )
}`,
    component: NavigationMenuPreviewDemo,
  },
  "sidebar-layout": {
    id: "sidebar-layout",
    title: "Navigation shell",
    description: "Sidebar primitives compose responsive app and docs navigation shells.",
    code: `import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
} from "@repo/ui/sidebar"

export function Example() {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-[320px] w-full">
        <Sidebar collapsible="none">
          <SidebarHeader />
          <SidebarContent />
        </Sidebar>
        <SidebarInset />
      </div>
    </SidebarProvider>
  )
}`,
    component: SidebarLayoutDemo,
  },
  "alert-dialog-confirm": {
    id: "alert-dialog-confirm",
    title: "Destructive confirmation",
    description: "Alert dialogs are suited to high-stakes or destructive actions.",
    code: `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@repo/ui/alert-dialog"
import { Button } from "@repo/ui/button"

export function Example() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete draft</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this draft?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
    component: AlertDialogConfirmDemo,
  },
  "context-menu-actions": {
    id: "context-menu-actions",
    title: "Right-click actions",
    description: "Context menus surface secondary actions at the point of interaction.",
    code: `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@repo/ui/context-menu"

export function Example() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>Right click this surface</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuItem>Rename</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
    component: ContextMenuActionsDemo,
  },
  "drawer-mobile": {
    id: "drawer-mobile",
    title: "Bottom sheet",
    description: "Drawers help keep secondary flows compact and mobile-friendly.",
    code: `import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@repo/ui/drawer"
import { Button } from "@repo/ui/button"

export function Example() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Publish checklist</DrawerTitle>
          <DrawerDescription>A bottom sheet keeps short flows mobile-friendly.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Continue</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,
    component: DrawerMobileDemo,
  },
  "dropdown-actions": {
    id: "dropdown-actions",
    title: "Compact action menu",
    description: "Dropdown menus group short action lists behind a lightweight trigger.",
    code: `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/dropdown-menu"
import { Button } from "@repo/ui/button"

export function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>View details</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Archive</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
    component: DropdownActionsDemo,
  },
  "hover-card-profile": {
    id: "hover-card-profile",
    title: "Hover details",
    description: "Hover cards surface short supplemental information without breaking flow.",
    code: `import { Button } from "@repo/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@repo/ui/hover-card"

export function Example() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">Hover the release owner</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        Design systems maintains the shared token layer.
      </HoverCardContent>
    </HoverCard>
  )
}`,
    component: HoverCardProfileDemo,
  },
  "aspect-ratio-media": {
    id: "aspect-ratio-media",
    title: "Fixed media frame",
    description: "Aspect ratio containers keep media and previews stable as layouts resize.",
    code: `import { AspectRatio } from "@repo/ui/aspect-ratio"

export function Example() {
  return (
    <AspectRatio ratio={16 / 9}>
      <div>16:9 media preview</div>
    </AspectRatio>
  )
}`,
    component: AspectRatioMediaDemo,
  },
  "carousel-gallery": {
    id: "carousel-gallery",
    title: "Paged surface list",
    description: "Carousels are useful when a small number of preview cards need horizontal paging.",
    code: `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@repo/ui/carousel"

export function Example() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>Tokens</CarouselItem>
        <CarouselItem>Patterns</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}`,
    component: CarouselGalleryDemo,
  },
  "collapsible-details": {
    id: "collapsible-details",
    title: "Expandable detail",
    description: "Collapsibles are useful for optional supporting content that should stay close by.",
    code: `import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@repo/ui/collapsible"
import { Button } from "@repo/ui/button"

export function Example() {
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger asChild>
        <Button variant="outline">Toggle</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        Keep long supporting details nearby without forcing the whole page open.
      </CollapsibleContent>
    </Collapsible>
  )
}`,
    component: CollapsibleDetailsDemo,
  },
  "direction-rtl": {
    id: "direction-rtl",
    title: "Directional layout",
    description: "Direction providers help shared interfaces adapt cleanly to RTL contexts.",
    code: `import { Button } from "@repo/ui/button"
import { ButtonGroup } from "@repo/ui/button-group"
import { DirectionProvider } from "@repo/ui/direction"

export function Example() {
  return (
    <DirectionProvider direction="rtl">
      <div dir="rtl">
        <ButtonGroup>
          <Button variant="outline">رجوع</Button>
          <Button>متابعة</Button>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  )
}`,
    component: DirectionRtlDemo,
  },
  "empty-state": {
    id: "empty-state",
    title: "No-results state",
    description: "Empty states give structure and guidance to first-use and no-results moments.",
    code: `import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@repo/ui/empty"
import { Button } from "@repo/ui/button"

export function Example() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">!</EmptyMedia>
        <EmptyTitle>No components matched</EmptyTitle>
        <EmptyDescription>Try a different filter or create a new primitive.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create component</Button>
      </EmptyContent>
    </Empty>
  )
}`,
    component: EmptyStateDemo,
  },
  "item-summary": {
    id: "item-summary",
    title: "Compact row composition",
    description: "Items are useful for list rows that need media, copy, and actions.",
    code: `import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@repo/ui/item"

export function Example() {
  return (
    <ItemGroup>
      <Item variant="outline">
        <ItemMedia variant="icon">!</ItemMedia>
        <ItemContent>
          <ItemTitle>Sidebar rollout</ItemTitle>
          <ItemDescription>Responsive navigation shell ready for review.</ItemDescription>
        </ItemContent>
        <ItemActions>Stable</ItemActions>
      </Item>
    </ItemGroup>
  )
}`,
    component: ItemSummaryDemo,
  },
  "resizable-panels": {
    id: "resizable-panels",
    title: "Adjustable split view",
    description: "Resizable panels help dense workspaces stay flexible without new routes.",
    code: `import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@repo/ui/resizable"

export function Example() {
  return (
    <ResizablePanelGroup orientation="horizontal">
      <ResizablePanel defaultSize={36}>Navigation</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={64}>Preview</ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
    component: ResizablePanelsDemo,
  },
  "scroll-area-log": {
    id: "scroll-area-log",
    title: "Constrained scrolling",
    description: "Scroll areas keep long content usable inside fixed-height layouts.",
    code: `import { ScrollArea } from "@repo/ui/scroll-area"

export function Example() {
  return (
    <ScrollArea className="h-48">
      <div>Long scrolling content</div>
    </ScrollArea>
  )
}`,
    component: ScrollAreaLogDemo,
  },
  "skeleton-loading": {
    id: "skeleton-loading",
    title: "Loading placeholder",
    description: "Skeletons help layouts stay stable while content loads in.",
    code: `import { Skeleton } from "@repo/ui/skeleton"

export function Example() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-16 w-full rounded-2xl" />
    </div>
  )
}`,
    component: SkeletonLoadingDemo,
  },
  "sonner-mounted": {
    id: "sonner-mounted",
    title: "Toast trigger",
    description: "Fire themed notifications once the shared toaster is mounted near the app root.",
    code: `"use client"

import { Button } from "@repo/ui/button"
import { toast } from "@repo/ui/sonner"

export function Example() {
  return (
    <Button
      onClick={() =>
        toast.success("Component published", {
          description: "The shared button docs are now live in the library.",
        })
      }
    >
      Success toast
    </Button>
  )
}`,
    component: SonnerToastDemo,
  },
  "spinner-inline": {
    id: "spinner-inline",
    title: "Inline loading",
    description: "Spinners are useful for small loading states and pending actions.",
    code: `import { Spinner } from "@repo/ui/spinner"

export function Example() {
  return (
    <div className="flex items-center gap-3">
      <Spinner className="size-5" />
      <span>Syncing package updates...</span>
    </div>
  )
}`,
    component: SpinnerInlineDemo,
  },
  "chart-revenue": {
    id: "chart-revenue",
    title: "Themed chart surface",
    description: "Charts inherit the shared token system while wrapping Recharts primitives cleanly.",
    code: `import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@repo/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

const data = [
  { month: "Jan", shipped: 8, reviewing: 3 },
  { month: "Feb", shipped: 12, reviewing: 4 },
]

export function Example() {
  return (
    <ChartContainer
      config={{
        shipped: { label: "Shipped", color: "var(--chart-1)" },
        reviewing: { label: "Reviewing", color: "var(--chart-3)" },
      }}
    >
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis axisLine={false} dataKey="month" tickLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="shipped" fill="var(--color-shipped)" radius={10} />
        <Bar dataKey="reviewing" fill="var(--color-reviewing)" radius={10} />
      </BarChart>
    </ChartContainer>
  )
}`,
    component: ChartRevenueDemo,
  },
  "kbd-shortcut": {
    id: "kbd-shortcut",
    title: "Shortcut hint",
    description: "Keyboard hint primitives keep shortcuts readable and consistent.",
    code: `import { Kbd, KbdGroup } from "@repo/ui/kbd"

export function Example() {
  return (
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  )
}`,
    component: KbdShortcutDemo,
  },
};

export function getDemos(ids: string[] = []) {
  return ids
    .map((id) => demos[id])
    .filter((entry): entry is InlineDemoEntry => entry !== undefined);
}
