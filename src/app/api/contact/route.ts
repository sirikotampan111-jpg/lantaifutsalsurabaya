import { NextRequest, NextResponse } from "next/server";

const contactSchema = {
  nama: "string",
  nomorHp: "string",
  email: "string",
  pesan: "string",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { nama, nomorHp, email, pesan } = body as Record<
      keyof typeof contactSchema,
      unknown
    >;

    if (
      !nama ||
      !nomorHp ||
      !email ||
      !pesan ||
      typeof nama !== "string" ||
      typeof nomorHp !== "string" ||
      typeof email !== "string" ||
      typeof pesan !== "string"
    ) {
      return NextResponse.json(
        { error: "Semua field wajib diisi dengan benar" },
        { status: 400 }
      );
    }

    if (nama.trim().length < 2) {
      return NextResponse.json(
        { error: "Nama minimal 2 karakter" },
        { status: 400 }
      );
    }

    const phoneRegex = /^[0-9+\-\s]{10,15}$/;
    if (!phoneRegex.test(nomorHp.trim())) {
      return NextResponse.json(
        { error: "Nomor HP tidak valid" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Format email tidak valid" },
        { status: 400 }
      );
    }

    if (pesan.trim().length < 10) {
      return NextResponse.json(
        { error: "Pesan minimal 10 karakter" },
        { status: 400 }
      );
    }

    // In production, send email, save to DB, or forward to WhatsApp
    // For now, just log and return success
    console.log("Contact form submission:", {
      nama: nama.trim(),
      nomorHp: nomorHp.trim(),
      email: email.trim(),
      pesan: pesan.trim(),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Pesan berhasil dikirim" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}