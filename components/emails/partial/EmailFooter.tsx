import React from 'react'

export default function EmailFooter() {
    return (
        <table width="100%" border={0} cellSpacing="0" cellPadding="0" role="presentation">
            <tr>
                <td>
                    <table width="100%" border={0} cellSpacing="0" cellPadding="0" role="presentation">
                        <tr>
                            <td valign="top" style={{padding: '36px 40px 36px 40px', borderRadius: '0px', backgroundColor: '#1b1b1b'}}>
                                <table width="100%" border={0} cellPadding="0" cellSpacing="0" role="presentation">
                                    <tr>
                                        <td align="center" valign="top" style={{padding: '0px 0px 0px 0px'}}>
                                            <a 
                                                href={`${process.env.BASE_URL}/studio/structure/forms;contactForm`}
                                                style={{lineHeight: '128%', letterSpacing: '-0.6px', fontFamily: "'Fira Sans', Arial, Helvetica, sans-serif", fontSize: '20px', fontWeight: '700', fontVariantLigatures: 'normal', color: '#ffffff', textDecoration: 'none'}}
                                            >
                                                studio
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    )
}
