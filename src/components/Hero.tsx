import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-emerald-100 to-lime-50">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-16 px-6 py-12 lg:py-0">
        <div className="my-auto">
          <Badge className="bg-gradient-to-r from-green-600 via-lime-500 to-emerald-400 text-white rounded-full px-4 py-1 text-sm shadow-md">
            🌿 Powered by Nature, Enhanced by Tech
          </Badge>
          <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight text-green-800 drop-shadow-sm">
            Effortless Plant Nursery Management
          </h1>
          <p className="mt-6 text-lg max-w-[60ch] text-green-700/90">
            Simplify your nursery operations with real-time plant tracking,
            stock insights, and smart dashboards. Designed for nature-lovers,
            built for growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-full text-base bg-green-600 hover:bg-green-700 text-white shadow-md"
            >
              <Link href="/plants">
                Get Started <ArrowUpRight className="ml-8 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base border-green-400 text-green-700 hover:bg-green-100 shadow-none"
            >
              <PlayCircle className="mr-2 h-5 w-5" /> Watch Demo
            </Button>
          </div>
        </div>

        <div className="relative w-full aspect-[4/3] lg:aspect-[9/10] bg-green-50 rounded-3xl overflow-hidden shadow-xl flex items-center justify-center">
          {/* Replace with animation or image */}
          <img
            src="/616pW-u9fxL._AC_UF1000,1000_QL80_.jpg"
            alt="Plant Dashboard Preview"
            className="w-full h-full object-contain p-6 drop-shadow-lg"
          />
          <div className="absolute bottom-4 right-4 text-xs text-green-500">
            * Live plant insights & care planner
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
