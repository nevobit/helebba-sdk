import React from 'react'
import styles from "./Pricing.module.css"
import Link from 'next/link';
import Head from 'next/head';
import Buttons from './Buttons';

const Pricing = ({
    searchParams,
  }: {
    searchParams: { [key: string]: string | undefined };
    params: { [key: string]: string };
  }) => {
  return (
    <div>
        <Head>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        </Head>
          <div className={styles.banner}>
                    <h2>Empieza tu prueba gratis</h2>
                    <p>Prueba Helebba gratis durante 7 días. No necesitas terjeta de crédito.</p>
                </div>

                <div>
                   <Buttons />

                    {searchParams?.type == "companies"? (

                    <div className={styles.pricing_cards}>
                        <div className={styles.card}>
                            <h3>Básico</h3>
                            <p>Simplifica la gestión de tu negocio con las funciones esenciales.</p>

                            <div className={styles.price}>
                                49,000 COP<span>/mes</span>
                            </div>

                            <Link href="https://app.helebba.com">Empieza ahora</Link>

                            <div className={styles.stats}>
                                <span><i className='bx bx-check'></i> 1,000 facturas al año</span>
                                <span><i className='bx bx-check'></i> 100 escaneos gratis al año</span>
                                <span><i className='bx bx-check'></i> 2 usuarios + asesor</span>
                                <span><i className='bx bx-check'></i> 5 bancos sincronizados</span>
                            </div>


                            <div className={styles.includes}>
                                <h4>INCLUYE</h4>
                                <ul>
                                    <li>Facturacion y gastos</li>
                                    <li>Flujo de caja</li>
                                    <li>CRM</li>
                                    <li>Gestion de proyectos</li>
                                    <li>Recursos humanos</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <h3>Estándar</h3>
                            <p>Automatiza tus procesos contables y asigna roles predefinidos.</p>

                            <div className={styles.price}>
                                99,000 COP<span>/mes</span>
                            </div>
                            <Link href="https://app.helebba.com">Empieza ahora</Link>

                            <div className={styles.stats}>
                                <span><i className='bx bx-check'></i> 3,000 facturas al año</span>
                                <span><i className='bx bx-check'></i> 300 escaneos al año</span>
                                <span><i className='bx bx-check'></i> 4 usuarios + asesor</span>
                                <span><i className='bx bx-check'></i> Bancos ilimitados</span>
                            </div>


                            <div className={styles.includes}>
                                <h4>Incluye</h4>
                                <ul>
                                    <li>To lo del plan Básico</li>
                                    <li>Contabilidad</li>
                                    <li>Roles de usuario predefinidos</li>
                                    <li>Remesas bancarias</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <h3>Avanzado</h3>
                            <p>Profesionaliza tus comunicaciones y personaliza roles.</p>

                            <div className={styles.price}>
                                179,000 COP
                            </div>
                            <Link href="https://app.helebba.com">Empieza ahora</Link>

                            <div className={styles.stats}>
                                <span><i className='bx bx-check'></i> 10,000 facturas al año</span>
                                <span><i className='bx bx-check'></i> 800 escaneos gratis al año</span>
                                <span><i className='bx bx-check'></i> 7 usuarios + asesor</span>
                                <span><i className='bx bx-check'></i> Bancos ilimitados</span>
                            </div>


                            <div className={styles.includes}>
                                <h4>Incluye</h4>
                                <ul>
                                    <li>Todo lo del plan Estándar</li>
                                    <li>Roles de usuario personalizados</li>
                                    <li>Poretal de cliente personalizado</li>
                                    <li>Recordatorio de pagos</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <h3>Premium</h3>
                            <p>Gestiona con facturación ilimitada y un account manager exclusivo.</p>

                            <div className={styles.price}>
                                350,000 COP<span>/mes</span>
                            </div>
                            <Link href="https://app.helebba.com">Empieza ahora</Link>
                            <div className={styles.stats}>
                                <span><i className='bx bx-check'></i> Facturas ilimitadas</span>
                                <span><i className='bx bx-check'></i> 1.500 escaneos gratis al año</span>
                                <span><i className='bx bx-check'></i> 15 usuarios + asesor</span>
                                <span><i className='bx bx-check'></i> Bancos ilimitados</span>
                            </div>

                            <div className={styles.includes}>
                                <h4>Incluye</h4>
                                <ul>
                                    <li>Todo lo del plan Avanzado</li>
                                    <li>Gestión de reservas</li>
                                    <li>IVA por pías</li>
                                    <li>Account manager</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    ): (

                    <div className={styles.pricing_cards}>
                        <div className={styles.card}>
                            <h3>Gratis</h3>
                            <p>Empieza a facturar ahora mismo.</p>

                            <div className={styles.price}>
                                0 COP<span>/mes</span>
                            </div>

                            <Link href="https://app.helebba.com">Empieza ahora</Link>

                            <div className={styles.stats}>
                                <span><i className='bx bx-check'></i> 30 facturas al año</span>
                                <span><i className='bx bx-check'></i> 5 escaneos gratis al año</span>
                                <span><i className='bx bx-check'></i> 1 usuarios + asesor</span>
                                <span><i className='bx bx-check'></i> 10 contactos</span>
                            </div>


                            <div className={styles.includes}>
                                <h4>INCLUYE</h4>
                                <ul>
                                    <li>Facturacion y gastos</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <h3>Plus</h3>
                            <p>Gestión total para independientes.</p>

                            <div className={styles.price}>
                                23,000 COP<span>/mes</span>
                            </div>
                            <Link href="https://app.helebba.com">Empieza ahora</Link>

                            <div className={styles.stats}>
                                <span><i className='bx bx-check'></i> 250 facturas al año</span>
                                <span><i className='bx bx-check'></i> 40 escaneos al año</span>
                                <span><i className='bx bx-check'></i> 1 usuario + asesor</span>
                                <span><i className='bx bx-check'></i> 25 Contactos</span>
                            </div>


                            <div className={styles.includes}>
                                <h4>Incluye</h4>
                                <ul>
                                    <li>Todo lo del plan Gratis</li>
                                    <li>Modelos de impuestos</li>
                                    <li>Portal del cliente</li>
                                    <li>Multidivisa</li>
                                    <li>Gestion de proyectos</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    )}

                </div>
    </div>
  )
}

export default Pricing