import Link from "next/link";
import { useRouter } from "next/router";

type Props = {};

const NavBar = (props: Props) => {
  const router = useRouter();
  const renderCurrentTabDot = (path: string) =>
    router.pathname === path && (
      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
    );
  return (
    <header>
      <nav className="p-8 px-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <a className="mr-12 text-2xl font-bold">Boki community</a>
            </Link>
            <div className="flex items-center">
              {renderCurrentTabDot("/")}
              <Link href="/">
                <a className="mr-8 hover:text-primary">Home</a>
              </Link>
            </div>
            <div className="flex items-center">
              {renderCurrentTabDot("/discover")}
              <Link href="/discover">
                <a className="mr-8 hover:text-primary">Discover</a>
              </Link>
            </div>
            <div className="flex items-center">
              {renderCurrentTabDot("how-it-works")}
              {/* <Link href="/how-it-works"> */}
              <a className="mr-8 text-grey-300">Boki Map (soon)</a>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
