"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpRight, CheckCircle, Mail, Building, Users } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

const WaitlistForm = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [platforms, setPlatforms] = useState<string[]>([]);
    const [useCase, setUseCase] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handlePlatformChange = (platform: string, checked: boolean) => {
        if (checked) {
            setPlatforms([...platforms, platform]);
        } else {
            setPlatforms(platforms.filter(p => p !== platform));
        }
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const { error } = await supabase.from('plccodeai_waitlist').insert([
            {
                name,
                email,
                company,
                role,
                platforms,
                use_case: useCase,
            }
        ]);

        setIsSubmitting(false);
        if (!error) {
            setIsSubmitted(true);
        } else {
            alert('There was an error joining the waitlist. Please try again.');
        }
    };

    if (isSubmitted) {
        return (
            <div id="waitlist" className="max-w-screen-lg mx-auto py-12 xs:py-20 px-6">
                <div className="text-center">
                    <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-500" />
                    </div>
                    <h2 className="text-3xl xs:text-4xl font-bold tracking-tight mb-4">
                        You&apos;re on the list!
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Thank you for joining the PLCcode.ai waitlist. We&apos;ll keep you updated on our progress
                        and notify you when early access becomes available.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            variant="outline"
                            onClick={() => setIsSubmitted(false)}
                            className="rounded-full"
                        >
                            Submit Another Response
                        </Button>
                        <Button
                            className="rounded-full"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Back to Top
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div id="waitlist" className="max-w-screen-lg mx-auto py-12 xs:py-20 px-6">
            <div className="text-center mb-12">
                <Badge className="rounded-full py-1 px-4 mb-4">
                    Early Access Program
                </Badge>
                <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Join the PLCcode.ai Waitlist
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Be among the first to experience AI-powered PLC programming. Get early access,
                    exclusive updates, and help shape the future of industrial automation.
                </p>
            </div>

            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Mail className="w-5 h-5" />
                        Early Access Registration
                    </CardTitle>
                    <CardDescription>
                        Help us understand your needs and get priority access to PLCcode.ai
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Basic Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name *</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={name}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address *</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your.email@company.com"
                                    value={email}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {/* Company Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="company">Company/Organization</Label>
                                <Input
                                    id="company"
                                    type="text"
                                    placeholder="Your company name"
                                    value={company}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompany(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="role">Your Role</Label>
                                <Select value={role} onValueChange={setRole}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select your role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="automation-engineer">Automation Engineer</SelectItem>
                                        <SelectItem value="controls-engineer">Controls Engineer</SelectItem>
                                        <SelectItem value="plc-programmer">PLC Programmer</SelectItem>
                                        <SelectItem value="system-integrator">System Integrator</SelectItem>
                                        <SelectItem value="project-manager">Project Manager</SelectItem>
                                        <SelectItem value="engineering-manager">Engineering Manager</SelectItem>
                                        <SelectItem value="student">Student</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Platform Experience */}
                        <div className="space-y-3">
                            <Label>Which PLC platforms do you currently use? (Select all that apply)</Label>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    "Rockwell/Allen-Bradley (Studio 5000)",
                                    "Siemens (TIA Portal)",
                                    "Beckhoff TwinCAT",
                                    "CODESYS",
                                    "Schneider Electric",
                                    "Mitsubishi",
                                    "Omron",
                                    "Other"
                                ].map((platform) => (
                                    <div key={platform} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={platform}
                                            checked={platforms.includes(platform)}
                                            onCheckedChange={(checked: boolean) =>
                                                handlePlatformChange(platform, checked)
                                            }
                                        />
                                        <Label
                                            htmlFor={platform}
                                            className="text-sm font-normal cursor-pointer"
                                        >
                                            {platform}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Use Case */}
                        <div className="space-y-2">
                            <Label htmlFor="useCase">What&apos;s your primary use case for PLCcode.ai? (Optional)</Label>
                            <Textarea
                                id="useCase"
                                placeholder="e.g., Manufacturing automation, Building management systems, Process control..."
                                value={useCase}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setUseCase(e.target.value)}
                                rows={3}
                            />
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full rounded-full text-base"
                            size="lg"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                    Joining Waitlist...
                                </>
                            ) : (
                                <>
                                    Join the Waitlist <ArrowUpRight className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </Button>

                        <p className="text-xs text-muted-foreground text-center">
                            By joining our waitlist, you agree to receive updates about PLCcode.ai.
                            We respect your privacy and will never share your information.
                        </p>
                    </form>
                </CardContent>
            </Card>

            {/* Benefits Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Early Access</h3>
                    <p className="text-sm text-muted-foreground">
                        Get priority access to PLCcode.ai before the public launch
                    </p>
                </div>
                <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Exclusive Updates</h3>
                    <p className="text-sm text-muted-foreground">
                        Receive development progress updates and feature announcements
                    </p>
                </div>
                <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Building className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Shape the Product</h3>
                    <p className="text-sm text-muted-foreground">
                        Provide feedback and help us build features that matter to you
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WaitlistForm;
