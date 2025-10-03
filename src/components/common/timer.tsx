"use client"

import { Pause, Play, RotateCcw } from "lucide-react"
import { useEffect, useMemo, useRef, useState } from "react"
import { Button } from "~/components/ui/button"
import { cn } from "~/lib/utils"

function formatMMSS(total: number) {
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}

export default function Timer({
  durationSeconds = 60,
  onComplete,
}: {
  durationSeconds?: number
  onComplete?: () => void
}) {
  const [remaining, setRemaining] = useState(durationSeconds)
  const [running, setRunning] = useState(false)
  const intervalRef = useRef<number | null>(null)

  const pct = useMemo(
    () => Math.max(0, Math.min(100, (1 - remaining / durationSeconds) * 100)),
    [remaining, durationSeconds]
  )

  useEffect(() => {
    // reset if durationSeconds changes
    setRemaining(durationSeconds)
    setRunning(false)
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [durationSeconds])

  useEffect(() => {
    if (!running) return
    if (intervalRef.current) return

    intervalRef.current = window.setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          // stop at zero
          if (intervalRef.current) {
            window.clearInterval(intervalRef.current)
            intervalRef.current = null
          }
          setRunning(false)
          onComplete?.()
          return 0
        }
        return r - 1
      })
    }, 1000)

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [running, onComplete])

  function handleToggle() {
    setRunning((v) => !v)
  }

  function handleReset() {
    setRunning(false)
    setRemaining(durationSeconds)
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  function percentageColor() {
    if (pct < 12.5) {
      return "bg-teal-400 border-teal-500 text-teal-500"
    } else if (pct < 25) {
      return "bg-emerald-400 border-emerald-500 text-emerald-500"
    } else if (pct < 37.5) {
      return "bg-green-400 border-green-500 text-green-500"
    } else if (pct < 50) {
      return "bg-lime-400 border-lime-500 text-lime-500"
    } else if (pct < 62.5) {
      return "bg-yellow-400 border-yellow-500 text-yellow-500"
    } else if (pct < 75) {
      return "bg-amber-400 border-amber-500 text-amber-500"
    } else if (pct < 87.5) {
      return "bg-orange-400 border-orange-500 text-orange-500"
    } else {
      return "bg-red-400 border-red-500 text-red-500"
    }
  }

  return (
    <div aria-label="Countdown timer" className="space-y-2">
      <div
        className="relative h-2 w-full overflow-hidden rounded-md bg-neutral-200"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pct)}
        aria-label="Time progress"
      >
        <div
          className={cn(
            "h-full bg-primary transition-[width] duration-300 ease-linear",
            percentageColor()
          )}
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="font-mono tabular-nums" aria-live="polite" aria-atomic="true">
          {formatMMSS(remaining)}
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            appearance={running ? "ghost" : "default"}
            size="icon"
            className={cn(
              "rounded-lg",
              running
                ? "bg-yellow-50 border-yellow-500 text-yellow-500"
                : "bg-emerald-50 border-emerald-500 text-emerald-500"
            )}
            onClick={handleToggle}
          >
            {running ? (
              <Pause className="text-yellow-500" />
            ) : (
              <Play className="text-emerald-500" />
            )}
          </Button>
          <Button
            variant="outline"
            appearance="ghost"
            size="icon"
            className="bg-indigo-50 border-indigo-500 text-indigo-500"
            onClick={handleReset}
          >
            <RotateCcw className="text-indigo-500" />
          </Button>
        </div>
      </div>
      {remaining === 0 && (
        <p className="text-sm text-destructive" role="status" aria-live="assertive">
          Time is up! Take a breath and move to the next question.
        </p>
      )}
    </div>
  )
}
