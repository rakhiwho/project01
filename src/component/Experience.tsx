import { useEffect, useRef } from "react";
import "./Style.css";
import s1 from "../../public/sofa.jpg"
import s2 from "../../public/self.jpg"
import s3 from "../../public/sofa1.jpg"
export default function Experience() {
  const expRef = useRef<HTMLDivElement | null>(null);
  const matRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (expRef.current) observer.observe(expRef.current);
    if (matRef.current) observer.observe(matRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Experience */}
      <section className="experience reveal" ref={expRef}>
        <div className="exp-img slide-left">
            <img className="exp-img expimg" src={s2}alt="" />
        </div>

        <div className="exp-text slide-right">
          <span>EXPERIENCES</span>
          <h3>We Provide You The Best Experience</h3>
          <p>
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals.
          </p>
          <a>More Info →</a>
        </div>
      </section>

      {/* Materials */}
      <section className="materials reveal" ref={matRef}>
        <div className="mat-text slide-left">
          <span>MATERIALS</span>
          <h3>Very Serious Materials For Making Furniture</h3>
          <p>
            Because Panto was very serious about designing furniture for our
            environment, using a very expensive and famous capital but at a
            relatively low price.
          </p>
          <a>More Info →</a>
        </div>

        <div className="mat-imgs slide-right">
          <div className="img expimg tall">
            <img className="img tall" src={s1}alt="" />

          </div>
          <div className="img">
            <img className="img expimg " src={s3}alt="" />

          </div>
        </div>
      </section>
    </>
  );
}
