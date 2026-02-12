import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const COLORS = {
  base: "#111827",
  highlight: "#1f2937",
};

// ========== MOBILE SKELETONS ==========

export function ProductSkeletonMobile() {
  return (
    <div className="group">
      <Skeleton 
        height={240} 
        baseColor={COLORS.base} 
        highlightColor={COLORS.highlight} 
        className="mb-3 rounded-lg"
        duration={1.5}
      />
      <Skeleton 
        height={14} 
        width="85%" 
        baseColor={COLORS.base} 
        highlightColor={COLORS.highlight} 
        className="mb-1 rounded"
        duration={1.5}
      />
      <Skeleton 
        height={12} 
        width="55%" 
        baseColor={COLORS.base} 
        highlightColor={COLORS.highlight}
        className="rounded"
        duration={1.5}
      />
    </div>
  );
}

export function ProductGridSkeletonMobile({ count = 8 }) {
  return (
    <div className="grid grid-cols-2 gap-2 px-4 py-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProductSkeletonMobile key={i} />
      ))}
    </div>
  );
}

export function CategorySkeletonMobile() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth px-4 pt-2">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="shrink-0">
          <Skeleton 
            height={80} 
            width={80} 
            baseColor={COLORS.base} 
            highlightColor={COLORS.highlight} 
            borderRadius={10}
            duration={1.5}
          />
          <Skeleton 
            height={16} 
            width={70} 
            baseColor={COLORS.base} 
            highlightColor={COLORS.highlight} 
            className="mt-2 rounded"
            duration={1.5}
          />
        </div>
      ))}
    </div>
  );
}

export function ProductDetailSkeletonMobile() {
  return (
    <div className="px-4 py-6 space-y-4">
      <Skeleton 
        height={320} 
        baseColor={COLORS.base} 
        highlightColor={COLORS.highlight} 
        className="mb-4 rounded-lg"
        duration={1.5}
      />
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton 
            key={i} 
            height={70} 
            width={70} 
            baseColor={COLORS.base} 
            highlightColor={COLORS.highlight} 
            borderRadius={8}
            duration={1.5}
          />
        ))}
      </div>
      <Skeleton 
        height={28} 
        width="75%" 
        baseColor={COLORS.base} 
        highlightColor={COLORS.highlight} 
        className="mb-3 rounded"
        duration={1.5}
      />
      <Skeleton 
        height={18} 
        width="45%" 
        baseColor={COLORS.base} 
        highlightColor={COLORS.highlight} 
        className="mb-6 rounded"
        duration={1.5}
      />
      <Skeleton 
        height={80} 
        baseColor={COLORS.base} 
        highlightColor={COLORS.highlight} 
        className="mb-4 rounded"
        duration={1.5}
      />
      <Skeleton 
        height={44} 
        width="100%" 
        baseColor={COLORS.base} 
        highlightColor={COLORS.highlight}
        className="rounded-lg"
        duration={1.5}
      />
    </div>
  );
}

export function FilterSidebarSkeletonMobile() {
  return (
    <div className="space-y-8 px-4 py-6">
      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton 
            height={18} 
            width="100%" 
            baseColor={COLORS.base} 
            highlightColor={COLORS.highlight} 
            className="mb-4 rounded"
            duration={1.5}
          />
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, j) => (
              <Skeleton 
                key={j} 
                height={16} 
                width="100%" 
                baseColor={COLORS.base} 
                highlightColor={COLORS.highlight}
                className="rounded"
                duration={1.5}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function HeroSkeletonMobile() {
  return (
    <Skeleton 
      height={300} 
      baseColor={COLORS.base} 
      highlightColor={COLORS.highlight} 
      className="mb-6 rounded-lg w-full"
      duration={1.5}
    />
  );
}

// ========== DESKTOP SKELETONS ==========

export function ProductSkeletonDesktop() {
  return (
    <div className="group">
      <Skeleton 
        height={360} 
        baseColor={COLORS.base} 
        highlightColor={COLORS.highlight} 
        className="mb-4 rounded-lg"
        duration={1.5}
      />
      <Skeleton 
        height={16} 
        width="90%" 
        baseColor={COLORS.base} 
        highlightColor={COLORS.highlight} 
        className="mb-2 rounded"
        duration={1.5}
      />
      <Skeleton 
        height={14} 
        width="50%" 
        baseColor={COLORS.base} 
        highlightColor={COLORS.highlight}
        className="rounded"
        duration={1.5}
      />
    </div>
  );
}

export function ProductGridSkeletonDesktop({ count = 9 }) {
  return (
    <div className="grid grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProductSkeletonDesktop key={i} />
      ))}
    </div>
  );
}

export function CategorySkeletonDesktop() {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="shrink-0">
          <Skeleton 
            height={140} 
            width={140} 
            baseColor={COLORS.base} 
            highlightColor={COLORS.highlight} 
            borderRadius={16}
            duration={1.5}
          />
          <Skeleton 
            height={20} 
            width={100} 
            baseColor={COLORS.base} 
            highlightColor={COLORS.highlight} 
            className="mt-3 rounded"
            duration={1.5}
          />
        </div>
      ))}
    </div>
  );
}

export function ProductDetailSkeletonDesktop() {
  return (
    <div className="grid grid-cols-2 gap-16 px-10 py-16">
      <div className="space-y-4">
        <Skeleton 
          height={560} 
          baseColor={COLORS.base} 
          highlightColor={COLORS.highlight} 
          className="mb-4 rounded-lg"
          duration={1.5}
        />
        <div className="flex gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton 
              key={i} 
              height={96} 
              width={96} 
              baseColor={COLORS.base} 
              highlightColor={COLORS.highlight} 
              borderRadius={10}
              duration={1.5}
            />
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <div className="space-y-4">
          <Skeleton 
            height={40} 
            width="85%" 
            baseColor={COLORS.base} 
            highlightColor={COLORS.highlight} 
            className="rounded"
            duration={1.5}
          />
          <Skeleton 
            height={24} 
            width="35%" 
            baseColor={COLORS.base} 
            highlightColor={COLORS.highlight}
            className="rounded"
            duration={1.5}
          />
        </div>
        <Skeleton 
          height={120} 
          baseColor={COLORS.base} 
          highlightColor={COLORS.highlight} 
          className="rounded"
          duration={1.5}
        />
        <Skeleton 
          height={48} 
          width="100%" 
          baseColor={COLORS.base} 
          highlightColor={COLORS.highlight}
          className="rounded-lg"
          duration={1.5}
        />
      </div>
    </div>
  );
}

export function FilterSidebarSkeletonDesktop() {
  return (
    <div className="space-y-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton 
            height={20} 
            width="100%" 
            baseColor={COLORS.base} 
            highlightColor={COLORS.highlight} 
            className="mb-4 rounded"
            duration={1.5}
          />
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, j) => (
              <Skeleton 
                key={j} 
                height={18} 
                width="100%" 
                baseColor={COLORS.base} 
                highlightColor={COLORS.highlight}
                className="rounded"
                duration={1.5}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function HeroSkeletonDesktop() {
  return (
    <Skeleton 
      height={400} 
      baseColor={COLORS.base} 
      highlightColor={COLORS.highlight} 
      className="mb-8 rounded-lg w-full"
      duration={1.5}
    />
  );
}

// ========== RESPONSIVE WRAPPER COMPONENTS ==========

export function ProductSkeleton() {
  return (
    <>
      <div className="md:hidden">
        <ProductSkeletonMobile />
      </div>
      <div className="hidden md:block">
        <ProductSkeletonDesktop />
      </div>
    </>
  );
}

export function ProductGridSkeleton({ count = 4 }) {
  return (
    <>
      <div className="md:hidden">
        <ProductGridSkeletonMobile count={count * 2} />
      </div>
      <div className="hidden md:block">
        <ProductGridSkeletonDesktop count={count} />
      </div>
    </>
  );
}

export function CategorySkeleton() {
  return (
    <>
      <div className="md:hidden">
        <CategorySkeletonMobile />
      </div>
      <div className="hidden md:block">
        <CategorySkeletonDesktop />
      </div>
    </>
  );
}

export function ProductDetailSkeleton() {
  return (
    <>
      <div className="md:hidden">
        <ProductDetailSkeletonMobile />
      </div>
      <div className="hidden md:block">
        <ProductDetailSkeletonDesktop />
      </div>
    </>
  );
}

export function FilterSidebarSkeleton() {
  return (
    <>
      <div className="md:hidden">
        <FilterSidebarSkeletonMobile />
      </div>
      <div className="hidden md:block">
        <FilterSidebarSkeletonDesktop />
      </div>
    </>
  );
}

export function HeroSkeleton() {
  return (
    <>
      <div className="md:hidden">
        <HeroSkeletonMobile />
      </div>
      <div className="hidden md:block">
        <HeroSkeletonDesktop />
      </div>
    </>
  );
}
