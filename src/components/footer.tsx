import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer">
      <h1 className="owner">
        Designed by <b>Zain Ali Mughal</b> | Powered by <b>Next.js</b>
      </h1>
      <div className="social-icons">
        <Link href="https://github.com/" target="_blank">
          <Image src="/github.png" alt="GitHub" width={40} height={40} />
        </Link>
        <Link href="https://www.linkedin.com/in/" target="_blank">
          <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} />
        </Link>
        <Link href="https://twitter.com/" target="_blank">
          <Image src="/twitter.png" alt="Twitter" width={40} height={40} />
        </Link>
      </div>
    </div>
  );
}
