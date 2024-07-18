import React from 'react'

export default function EmailHeader() {
    return (
        <table width="100%" border={0} cellSpacing="0" cellPadding="0" role="presentation">
            <tr>
                <td style={{padding: '0px 0px 0px 0px'}}>
                    <table width="100%" border={0} cellSpacing="0" cellPadding="0" role="presentation">
                        <tr>
                            <td valign="top" style={{padding: '40px 40px 40px 40px', borderRadius: '0px', backgroundColor: '#1B1B1B'}}>
                                <table width="100%" border={0} cellPadding="0" cellSpacing="0" role="presentation">
                                    <tr>
                                        <td align="center" valign="top" style={{padding: '0px 0px 0px 0px'}}>
                                            <img src={`${process.env.BASE_URL}/images/logo.png`} width="50" height="50" alt="" style={{display: 'block', border: '0', outline: '0', lineHeight: '100%', width: '50px', height: '50px', maxWidth: '100%'}} />
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
