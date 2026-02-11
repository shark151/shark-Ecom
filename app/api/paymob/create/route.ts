import { NextRequest, NextResponse } from 'next/server'
import Order from '@/lib/db/models/order.model'

export async function POST(req: NextRequest) {
  try {
    const { orderId } = await req.json()

    if (!orderId) {
      return NextResponse.json(
        { message: 'orderId is required' },
        { status: 400 }
      )
    }

    const order = await Order.findById(orderId)

    if (!order) {
      return NextResponse.json(
        { message: 'Order not found' },
        { status: 404 }
      )
    }

    /**
     * هنا هتحط كود Paymob:
     * 1- auth token
     * 2- create order
     * 3- create payment key
     * 4- return redirect_url
     */

    return NextResponse.json({
      redirect_url: 'https://accept.paymob.com/api/acceptance/iframes/XXXX',
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}