import Link, {LinkProps} from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
  activeClassName: string;
}

export default function ActiveLink({activeClassName, children, ...rest}: ActiveLinkProps) {
  const {asPath} = useRouter();

  const className = asPath === rest.href ? activeClassName : '';

  return (
    <Link {...rest} className={className}>
      {children}
    </Link>
  )
}